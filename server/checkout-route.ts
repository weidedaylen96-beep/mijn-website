import {getChatGPTUser} from '../../chatgpt-auth';
export async function POST(request:Request){
 const reply=(data:unknown,status:number)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
 const user=await getChatGPTUser();
 if(!user)return reply({error:'Log in voordat je kunt bestellen.',signIn:'/signin-with-chatgpt?return_to=%2Faccount'},401);
 if(request.headers.get('Origin')!==new URL(request.url).origin)return reply({error:'Ongeldige aanvraag.'},403);
 return reply({error:'Bestellen en betalen zijn nog niet beschikbaar.'},503);
}
