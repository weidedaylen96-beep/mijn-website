let products = [
{id:"tee-lilac",name:"REVE Studio Tee",color:"Warm cream",category:"shirts",price:2995,bg:"#e8e3d9",fabric:"#d8cdb8",type:"tee",image:"/cream-tee.png"},
{id:"hoodie-cream",name:"REVE Rhythm Hoodie",color:"Soft lilac",category:"hoodies",price:6495,bg:"#e7dfed",fabric:"#b8a2cf",type:"hoodie",image:"/lilac-hoodie.png"},
{id:"tee-black",name:"REVE Signature Tee",color:"Washed black",category:"shirts",price:3495,bg:"#dce0d9",fabric:"#41453e",type:"tee",image:"/black-tee.png"},
{id:"cap",name:"REVE Everyday Cap",color:"Washed black",category:"petjes",price:2495,bg:"#e2e2d5",fabric:"#41453e",type:"cap",image:"/black-cap.png"}
,
{id:"black-hoodie",name:"REVE After Hours Hoodie",color:"Washed black",category:"hoodies",price:6995,type:"hoodie",image:"/black-hoodie.png",bg:"#e8e3d9",fabric:"#41453e"},
{id:"olive-tee",name:"REVE Olive Studio Tee",color:"Muted olive",category:"shirts",price:3495,type:"tee",image:"/olive-tee.png",bg:"#e8e3d9",fabric:"#787f5c"},
{id:"cream-tote",name:"REVE Studio Tote",color:"Natural cream",category:"accessoires",price:1995,type:"cap",sizes:["One size"],image:"/cream-tote.png",bg:"#e8e3d9",fabric:"#d8cdb8"},
{id:"reve-sneakers",name:"REVE Everyday Sneaker",color:"Cream / olive",category:"schoenen",price:8995,type:"shoe",sizes:["36","37","38","39","40","41","42","43","44","45","46"],image:"/reve-sneakers.png",bg:"#e8e3d9",fabric:"#d8cdb8"},
{id:"reve-keychain",name:"REVE Signature Keychain",color:"Cream / olive",category:"accessoires",price:995,type:"cap",sizes:["One size"],image:"/reve-keychain.png",bg:"#e8e3d9",fabric:"#787f5c"}
,{"id":"cream-bucket","name":"REVE Studio Bucket Hat","color":"Warm cream","category":"petjes","price":2995,"type":"cap","sizes":["One size"],"image":"/cream-bucket.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"olive-cap","name":"REVE Everyday Dad Cap","color":"Muted olive","category":"petjes","price":2795,"type":"cap","sizes":["One size"],"image":"/olive-cap.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"black-sneaker","name":"REVE Night Sneaker","color":"Washed black / cream","category":"schoenen","price":9495,"type":"tee","sizes":["36","37","38","39","40","41","42","43","44","45","46"],"image":"/black-sneaker.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"cream-high-top","name":"REVE Studio High Top","color":"Cream / lilac","category":"schoenen","price":9995,"type":"tee","sizes":["36","37","38","39","40","41","42","43","44","45","46"],"image":"/cream-high-top.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"olive-cargo","name":"REVE Utility Cargo","color":"Muted olive","category":"broeken","price":6995,"type":"tee","sizes":["XS","S","M","L","XL"],"image":"/olive-cargo.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"black-trouser","name":"REVE Relaxed Trouser","color":"Washed black","category":"broeken","price":6495,"type":"tee","sizes":["XS","S","M","L","XL"],"image":"/black-trouser.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"core-sand-hoodie","name":"REVE Core Oversized Hoodie","color":"Sand","category":"hoodies","price":7495,"line":"core","type":"hoodie","sizes":["XS","S","M","L","XL"],"image":"/core-sand-hoodie.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"core-sweatpants","name":"REVE Core Relaxed Sweatpants","color":"Oatmeal","category":"broeken","price":5995,"line":"core","type":"tee","sizes":["XS","S","M","L","XL"],"image":"/core-sweatpants.png","bg":"#e8e3d9","fabric":"#b8a2cf"},{"id":"core-boxy-tee","name":"REVE Core Boxy Tee","color":"Warm cream","category":"shirts","price":3995,"line":"core","type":"tee","sizes":["XS","S","M","L","XL"],"image":"/core-boxy-tee.png","bg":"#e8e3d9","fabric":"#b8a2cf"}
,{"id":"atelier-runner","name":"REVE Atelier Runner","color":"Cream / olive / lilac","category":"schoenen","line":"atelier","price":12995,"type":"shoe","sizes":["36","37","38","39","40","41","42","43","44","45","46"],"image":"/atelier-runner.png","bg":"#e8e3d9","fabric":"#d8cdb8"},{"id":"studio-bomber","name":"REVE Studio Bomber","color":"Washed black / cream","category":"jassen","line":"atelier","price":11995,"type":"jacket","sizes":["XS","S","M","L","XL"],"image":"/studio-bomber.png","bg":"#e8e3d9","fabric":"#41453e"}
];
products.forEach(p=>{p.description=p.description||((p.line==="core"?"REVE Core: rustige oversized basics met een subtiel REVE-logo. ":"")+"Origineel REVE-ontwerpconcept in "+p.color+". Materiaal, afmetingen, productie en definitieve verkoopprijs worden vastgesteld voor de verkoop start.");});
const money = value => new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR"}).format(value/100);
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[c]));
function illustration(p) {
if(p.image)return '<img class="product-photo" src="'+escapeHTML(p.image)+'" alt="'+escapeHTML(p.name)+'" loading="lazy">';
const shape = p.type === "cap" ? '<path d="M90 203Q90 80 200 75Q310 80 310 203Z"/><path d="M90 200Q180 178 310 203L355 248Q260 285 80 229Z"/><path d="M200 80V195" fill="none" stroke="#000" stroke-opacity=".12"/>' : p.type === "hoodie" ? '<path d="M151 108Q150 42 200 42Q250 42 249 108L300 130 350 305 288 321 265 220 273 354H127L135 220 112 321 50 305 100 130Z"/><path d="M151 108Q200 155 249 108M150 285h100l12 43H138Z" fill="none" stroke="#000" stroke-opacity=".15"/><path d="M181 135v65m38-65v65" stroke="#f5f1e8" stroke-width="3"/>' : '<path d="M144 90 100 110 48 195 113 228 133 198 124 344Q200 363 276 344L267 198 287 228 352 195 300 110 256 90 232 82Q200 103 168 82Z"/><path d="M168 83Q200 125 232 83" fill="none" stroke="#000" stroke-opacity=".15" stroke-width="7"/>';
return '<svg viewBox="0 0 400 400" role="img" aria-label="Illustratie van '+p.name+'"><g fill="'+p.fabric+'" stroke="'+p.fabric+'" stroke-width="2">'+shape+'</g><text x="200" y="'+(p.type==="cap"?172:220)+'" text-anchor="middle" fill="#f4f1ea" font-family="Arial,sans-serif" font-size="'+(p.type==="cap"?18:23)+'" font-weight="bold" letter-spacing="4">REVE</text></svg>';
}
const sizesFor = p => p.sizes || (p.type === "cap" ? ["One size"] : ["XS","S","M","L","XL"]);
let activeFilter="all";
let cart = [];
try { const saved=JSON.parse(localStorage.getItem("reve-cart")||"[]"); if(Array.isArray(saved)) cart=saved.filter(i=>typeof i.id==="string"&&["XS","S","M","L","XL","One size","36","37","38","39","40","41","42","43","44","45","46","28","29","30","31","32","33","34","35","116","122","128","134","140","146","152","158","164","170"].includes(i.size)&&Number.isInteger(i.qty)&&i.qty>0&&i.qty<=99); } catch {}
function saveCart(){try{localStorage.setItem("reve-cart",JSON.stringify(cart))}catch{} updateCart();}
function renderProducts(filter=activeFilter){
activeFilter=filter;
const grid=document.getElementById("products");grid.replaceChildren();
const audience=document.getElementById("audience").value;
const query=document.getElementById("search").value.trim().toLocaleLowerCase("nl");
const sort=document.getElementById("sort").value;
const visible=products.filter(p=>(filter==="all"||p.category===filter||(filter==="core"&&p.line==="core"))&&(audience==="all"||(p.audience||"unisex")===audience||((p.audience||"unisex")==="unisex"&&["dames","heren"].includes(audience)))&&[p.name,p.color,p.category].join(" ").toLocaleLowerCase("nl").includes(query));
visible.sort((a,b)=>sort==="low"?a.price-b.price:sort==="high"?b.price-a.price:sort==="name"?a.name.localeCompare(b.name):0);
document.getElementById("result-count").textContent=visible.length+" producten";
if(!visible.length){const empty=document.createElement("div");empty.className="no-results";empty.innerHTML=["jongens","meisjes"].includes(audience)?"<h3>De kindercollectie komt later.</h3><p>Er zijn nog geen REVE-producten voor deze selectie. Bekijk ondertussen de volwassen ontwerpcollectie.</p>":"<h3>Geen kledingstukken gevonden.</h3><p>Probeer een andere zoekterm of bekijk de hele collectie.</p>";const reset=document.createElement("button");reset.className="button dark";reset.textContent="Toon alles";reset.onclick=()=>{document.getElementById("audience").value="all";document.getElementById("search").value="";document.querySelector('[data-filter="all"]').click()};empty.append(reset);grid.append(empty);}
visible.forEach(p=>{
p={...p,name:escapeHTML(p.name),color:escapeHTML(p.color)};
const card=document.createElement("article");card.className="product-card";
card.innerHTML='<div class="product-art" style="--bg:'+p.bg+'"><span class="tag">FIRST CHAPTER</span>'+illustration(p)+'</div><div class="product-heading"><h3>'+p.name+'</h3><span class="price">'+money(p.price)+'</span></div><p class="color">'+p.color+'</p><div class="product-actions"><select aria-label="Maat voor '+p.name+'">'+sizesFor(p).map(s=>'<option>'+s+'</option>').join("")+'</select><button class="add" type="button">In winkelmand +</button></div>';
card.querySelector(".add").addEventListener("click",()=>{const size=card.querySelector("select").value;const existing=cart.find(i=>i.id===p.id&&i.size===size);if(existing){if(existing.qty>=99)return;existing.qty++}else cart.push({id:p.id,size,qty:1});saveCart();announce(p.name+" toegevoegd aan je winkelmand.");});
const detail=document.createElement("button");detail.className="detail-button";detail.textContent="Bekijk product ↗";detail.setAttribute("aria-label","Bekijk "+p.name);detail.onclick=()=>openProduct(p);card.querySelector(".product-art").append(detail);
grid.append(card);
});
}
function updateCart(){
document.getElementById("cart-count").textContent=cart.reduce((n,i)=>n+i.qty,0);
const items=document.getElementById("cart-items");items.replaceChildren();let total=0;
if(!cart.length){const empty=document.createElement("p");empty.textContent="Je winkelmand is nog leeg. Ontdek jouw favoriet in de collectie.";items.append(empty);}
cart.forEach((item,index)=>{const p=products.find(p=>p.id===item.id);if(!p)return;total+=p.price*item.qty;const row=document.createElement("div");row.className="cart-row";const info=document.createElement("div");const title=document.createElement("strong");title.textContent=p.name;const details=document.createElement("p");details.textContent=item.size+" · "+item.qty+" stuk"+(item.qty>1?"s":"");const remove=document.createElement("button");remove.className="remove";remove.textContent="Verwijderen";remove.setAttribute("aria-label",p.name+" maat "+item.size+" verwijderen");remove.addEventListener("click",()=>{cart.splice(index,1);saveCart()});const quantities=document.createElement("div");quantities.className="quantity";[-1,1].forEach(change=>{const control=document.createElement("button");control.textContent=change===-1?"−":"+";control.setAttribute("aria-label",(change===-1?"Minder ":"Meer ")+p.name+" maat "+item.size);control.disabled=change===1&&item.qty>=99;control.onclick=()=>{item.qty+=change;if(item.qty===0)cart.splice(index,1);saveCart();const controls=items.querySelectorAll(".quantity");if(controls.length){const group=controls[Math.min(index,controls.length-1)];group.querySelector(change===-1?"button":"button:last-child").focus()}else document.getElementById("continue-shopping").focus()};quantities.append(control)});const amount=document.createElement("span");amount.textContent=item.qty;quantities.insertBefore(amount,quantities.lastChild);info.append(title,details,quantities,remove);const price=document.createElement("span");price.textContent=money(p.price*item.qty);if(p.image){const photo=document.createElement("img");photo.className="cart-thumbnail";photo.src=p.image;photo.alt=p.name;row.append(photo)}row.append(info,price);items.append(row);});
document.getElementById("cart-total").textContent=money(total);
document.getElementById("clear-cart").hidden=!cart.length;
}
let toastTimer;
function announce(message){const status=document.getElementById("status");status.textContent=message;status.classList.add("visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>status.classList.remove("visible"),2500);}
document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(b=>{b.classList.toggle("active",b===button);b.setAttribute("aria-pressed",String(b===button))});renderProducts(button.dataset.filter);}));
const dialog=document.getElementById("cart");
document.getElementById("open-cart").addEventListener("click",()=>dialog.showModal());
document.getElementById("close-cart").addEventListener("click",()=>dialog.close());
document.getElementById("continue-shopping").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();updateCart();
function openProduct(p){
p={...p,name:escapeHTML(p.name),color:escapeHTML(p.color)};
const content=document.getElementById("product-content");
content.innerHTML='<div class="product-art" style="--bg:'+p.bg+'">'+illustration(p)+'</div><h2 id="product-title">'+p.name+'</h2><p>'+p.color+' · '+money(p.price)+'</p><p class="product-description">'+(p.description?escapeHTML(p.description):p.type==='hoodie'?'Een ontspannen hoodie voor rustige ochtenden en lange avonden.':p.type==='cap'?'Een rustig accent voor je dagelijkse outfit.':'Een eenvoudig shirt met het REVE-logo, ontworpen als basis voor jouw eigen stijl.')+'</p><p class="concept-note">Ontwerpconcept. Materiaal, pasvorm en afmetingen worden bevestigd voor de verkoop start.</p><label class="size-label">Kies je maat<select id="detail-size">'+sizesFor(p).map(s=>'<option>'+s+'</option>').join('')+'</select></label><button id="detail-add" class="button dark">In winkelmand +</button>';
document.getElementById('detail-add').onclick=()=>{const size=document.getElementById('detail-size').value;const existing=cart.find(i=>i.id===p.id&&i.size===size);if(existing&&existing.qty>=99){announce('Je hebt het maximum aantal voor deze maat bereikt.');return}if(existing)existing.qty++;else cart.push({id:p.id,size,qty:1});saveCart();announce(p.name+' toegevoegd aan je winkelmand.');};
document.getElementById('product-dialog').showModal();
}
document.getElementById('close-product').onclick=()=>document.getElementById('product-dialog').close();
document.getElementById('search').addEventListener('input',()=>renderProducts());
document.getElementById('sort').addEventListener('change',()=>renderProducts());
document.getElementById('clear-cart').onclick=()=>{cart=[];saveCart();announce('Je winkelmand is leeggemaakt.');document.getElementById('continue-shopping').focus();};
window.addEventListener('storage',event=>{if(event.key==='reve-cart'){try{const data=JSON.parse(event.newValue||'[]');cart=Array.isArray(data)?data.filter(i=>products.some(p=>p.id===i.id&&sizesFor(p).includes(i.size))&&Number.isInteger(i.qty)&&i.qty>0&&i.qty<=99):[];updateCart();}catch{}}});

(async()=>{try{const response=await fetch('/api/catalog');if(!response.ok)throw Error();const data=await response.json();products=[...products,...data.products];cart=cart.filter(i=>products.some(p=>p.id===i.id&&sizesFor(p).includes(i.size)));renderProducts();updateCart();}catch{const note=document.createElement('p');note.className='concept-note';note.textContent='Eigen producten konden niet worden geladen. Vernieuw de pagina om opnieuw te proberen.';document.getElementById('products').before(note)}try{const response=await fetch('/api/catalog?me=1');const data=await response.json();document.getElementById('admin-link').hidden=!data.isOwner;}catch{}})();

document.getElementById('show-core').onclick=()=>document.querySelector('[data-filter=core]').click();

document.getElementById('audience').onchange=()=>renderProducts();

document.querySelectorAll("[data-discover]").forEach(link=>link.addEventListener("click",()=>{document.getElementById("search").value="";document.getElementById("audience").value="all";document.querySelector(`[data-filter="${link.dataset.discover}"]`).click();}));
