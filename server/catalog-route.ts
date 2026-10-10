import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '../../chatgpt-auth';
import {baseProducts} from '../../catalog-base';
const runtime=()=>env as unknown as {BUCKET:R2Bucket;REVE_OWNER_EMAIL?:string};
const reply=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
async function owner(){const u=await getChatGPTUser();return !!u&&!!runtime().REVE_OWNER_EMAIL&&u.email.toLowerCase()===runtime().REVE_OWNER_EMAIL!.toLowerCase();}
export async function GET(request:Request){try{
const url=new URL(request.url);if(url.searchParams.get('me'))return reply({authenticated:!!(await getChatGPTUser()),isOwner:await owner()});
const image=url.searchParams.get('image');if(image){if(!/^[a-f0-9-]+\.(png|jpg|webp)$/.test(image))return new Response('Niet gevonden',{status:404});const object=await runtime().BUCKET.get('images/'+image);if(!object)return new Response('Niet gevonden',{status:404});return new Response(object.body,{headers:{'Content-Type':object.httpMetadata?.contentType||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'private, max-age=3600'}});}
const admin=url.searchParams.get('admin')==='1';if(admin&&!(await owner()))return reply({error:'Alleen de eigenaar mag beheren.'},403);
let cursor:string|undefined;const products:any[]=[];do{const list=await runtime().BUCKET.list({prefix:'products/',cursor});for(const entry of list.objects){const object=await runtime().BUCKET.get(entry.key);if(object){const p=await object.json<any>();if(admin||!p.archived)products.push(p);}}cursor=list.truncated?list.cursor:undefined;}while(cursor);
const visibleIds=new Set([...baseProducts,...products].map(p=>p.id));const inventory:Record<string,number>={};cursor=undefined;do{const list=await runtime().BUCKET.list({prefix:'inventory/',cursor});for(const entry of list.objects){const id=entry.key.slice('inventory/'.length).replace(/\.json$/,'');if(!visibleIds.has(id))continue;const object=await runtime().BUCKET.get(entry.key);if(object){const record=await object.json<any>();if(Number.isInteger(record.stock)&&record.stock>=0&&record.stock<=1000000)inventory[id]=record.stock;}}cursor=list.truncated?list.cursor:undefined;}while(cursor);return reply({products,inventory,...(admin?{baseProducts}:{})});
}catch{return reply({error:'De collectie kon niet worden geladen. Probeer opnieuw.'},503);}}
export async function POST(request:Request){
if(!(await owner()))return reply({error:'Alleen de eigenaar mag wijzigingen plaatsen.'},403);
if(request.headers.get('Origin')!==new URL(request.url).origin||request.headers.get('Sec-Fetch-Site')==='cross-site')return reply({error:'Ongeldige aanvraag.'},403);
try{if(request.headers.get('Content-Type')?.startsWith('multipart/form-data')){
if(Number(request.headers.get('content-length'))>9*1024*1024)return reply({error:'Foto te groot. Maximaal 8 MB.'},413);
const form=await request.formData();const file=form.get('file');if(!(file instanceof File)||file.size===0||file.size>8*1024*1024)return reply({error:'Kies een foto van maximaal 8 MB.'},400);
const bytes=new Uint8Array(await file.arrayBuffer());let ext='',type='';if(bytes[0]===255&&bytes[1]===216&&bytes[2]===255){ext='jpg';type='image/jpeg';}else if([137,80,78,71,13,10,26,10].every((n,i)=>bytes[i]===n)){ext='png';type='image/png';}else if(new TextDecoder().decode(bytes.slice(0,4))==='RIFF'&&new TextDecoder().decode(bytes.slice(8,12))==='WEBP'){ext='webp';type='image/webp';}else return reply({error:'Gebruik JPG, PNG of WebP.'},400);
const key=crypto.randomUUID()+'.'+ext;await runtime().BUCKET.put('images/'+key,bytes,{httpMetadata:{contentType:type}});return reply({url:'/api/catalog?image='+key});}
const body=await request.text();if(body.length>20000)return reply({error:'Aanvraag te groot.'},413);const p=JSON.parse(body);
if(p.action==='stock'){
const id=p.id;if(typeof id!=='string'||!/^[a-z0-9-]{1,100}$/.test(id))return reply({error:'Ongeldig product.'},400);
if(p.stock!==null&&(!Number.isInteger(p.stock)||p.stock<0||p.stock>1000000))return reply({error:'Vul een heel voorraadgetal van 0 tot 1000000 in, of laat het aantal leeg.'},400);
if(!baseProducts.some(item=>item.id===id)&&!(await runtime().BUCKET.head('products/'+id+'.json')))return reply({error:'Product niet gevonden.'},404);
const key='inventory/'+id+'.json';if(p.stock===null)await runtime().BUCKET.delete(key);else await runtime().BUCKET.put(key,JSON.stringify({stock:p.stock}),{httpMetadata:{contentType:'application/json'}});
return reply({id,stock:p.stock});
}
if(typeof p.name!=='string'||!p.name.trim()||p.name.length>100||typeof p.color!=='string'||p.color.length>80||!['shirts','hoodies','accessoires','schoenen','broeken','petjes','jassen'].includes(p.category)||!Number.isInteger(p.price)||p.price<100||p.price>1000000||typeof p.description!=='string'||p.description.length>2000)return reply({error:'Controleer naam, categorie, prijs en beschrijving.'},400);
const audience=p.audience||"unisex";if(!["unisex","dames","heren","jongens","meisjes"].includes(audience))return reply({error:"Kies een geldige doelgroep."},400);const child=["jongens","meisjes"].includes(audience);const validSizes=p.category==="schoenen"?(child?["28","29","30","31","32","33","34","35"]:["36","37","38","39","40","41","42","43","44","45","46"]):(child?["116","122","128","134","140","146","152","158","164","170"]:["XS","S","M","L","XL"]);const sizes=["accessoires","petjes"].includes(p.category)?["One size"]:validSizes.filter(s=>Array.isArray(p.sizes)&&p.sizes.includes(s));if(!sizes.length)return reply({error:'Kies minstens één maat.'},400);
const image=typeof p.image==='string'?p.image:'';if(image&&!/^\/api\/catalog\?image=[a-f0-9-]+\.(png|jpg|webp)$/.test(image))return reply({error:'Upload een geldige foto.'},400);if(image&&!(await runtime().BUCKET.head('images/'+image.split('=')[1])))return reply({error:'Foto niet gevonden.'},400);
const id=p.id===undefined?crypto.randomUUID():p.id;if(typeof id!=='string'||!/^[-a-f0-9]{36}$/.test(id))return reply({error:'Ongeldig product.'},400);if(p.id&&!(await runtime().BUCKET.head('products/'+id+'.json')))return reply({error:'Product niet gevonden.'},404);
const product={id,audience,name:p.name.trim(),color:p.color.trim(),category:p.category,price:p.price,description:p.description.trim(),image,sizes,archived:p.archived===true,type:p.category==='hoodies'?'hoodie':p.category==='accessoires'?'cap':'tee',bg:'#e8e3d9',fabric:'#b8a2cf'};
await runtime().BUCKET.put('products/'+id+'.json',JSON.stringify(product),{httpMetadata:{contentType:'application/json'}});return reply({product});
}catch{return reply({error:'Opslaan mislukt. Probeer opnieuw.'},500);}}
