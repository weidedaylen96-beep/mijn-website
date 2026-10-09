const products = [
{id:"tee-lilac",name:"Everyday Tee",color:"Soft lilac",category:"shirts",price:2995,bg:"#e7dfed",fabric:"#b8a2cf",type:"tee"},
{id:"hoodie-cream",name:"Slow Days Hoodie",color:"Warm cream",category:"hoodies",price:6495,bg:"#e8e3d9",fabric:"#d8cdb8",type:"hoodie"},
{id:"tee-black",name:"Signature Tee",color:"Washed black",category:"shirts",price:3495,bg:"#dce0d9",fabric:"#41453e",type:"tee"},
{id:"cap",name:"Off Duty Cap",color:"Olive",category:"accessoires",price:2495,bg:"#e2e2d5",fabric:"#787f5c",type:"cap"}
];
const money = value => new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR"}).format(value/100);
function illustration(p) {
const shape = p.type === "cap" ? '<path d="M90 203Q90 80 200 75Q310 80 310 203Z"/><path d="M90 200Q180 178 310 203L355 248Q260 285 80 229Z"/><path d="M200 80V195" fill="none" stroke="#000" stroke-opacity=".12"/>' : p.type === "hoodie" ? '<path d="M151 108Q150 42 200 42Q250 42 249 108L300 130 350 305 288 321 265 220 273 354H127L135 220 112 321 50 305 100 130Z"/><path d="M151 108Q200 155 249 108M150 285h100l12 43H138Z" fill="none" stroke="#000" stroke-opacity=".15"/><path d="M181 135v65m38-65v65" stroke="#f5f1e8" stroke-width="3"/>' : '<path d="M144 90 100 110 48 195 113 228 133 198 124 344Q200 363 276 344L267 198 287 228 352 195 300 110 256 90 232 82Q200 103 168 82Z"/><path d="M168 83Q200 125 232 83" fill="none" stroke="#000" stroke-opacity=".15" stroke-width="7"/>';
return '<svg viewBox="0 0 400 400" role="img" aria-label="Illustratie van '+p.name+'"><g fill="'+p.fabric+'" stroke="'+p.fabric+'" stroke-width="2">'+shape+'</g><text x="200" y="'+(p.type==="cap"?172:220)+'" text-anchor="middle" fill="#f4f1ea" font-family="Arial,sans-serif" font-size="'+(p.type==="cap"?18:23)+'" font-weight="bold" letter-spacing="4">REVE</text></svg>';
}
let cart = [];
try { const saved=JSON.parse(localStorage.getItem("reve-cart")||"[]"); if(Array.isArray(saved)) cart=saved.filter(i=>products.some(p=>p.id===i.id)&&["XS","S","M","L","XL","One size"].includes(i.size)&&Number.isInteger(i.qty)&&i.qty>0&&i.qty<=99); } catch {}
function saveCart(){try{localStorage.setItem("reve-cart",JSON.stringify(cart))}catch{} updateCart();}
function renderProducts(filter="all"){
const grid=document.getElementById("products");grid.replaceChildren();
products.filter(p=>filter==="all"||p.category===filter).forEach(p=>{
const card=document.createElement("article");card.className="product-card";
card.innerHTML='<div class="product-art" style="--bg:'+p.bg+'"><span class="tag">FIRST CHAPTER</span>'+illustration(p)+'</div><div class="product-heading"><h3>'+p.name+'</h3><span class="price">'+money(p.price)+'</span></div><p class="color">'+p.color+'</p><div class="product-actions"><select aria-label="Maat voor '+p.name+'">'+(p.type==="cap"?'<option>One size</option>':["XS","S","M","L","XL"].map(s=>'<option'+(s==="M"?' selected':'')+'>'+s+'</option>').join(""))+'</select><button class="add" type="button">In winkelmand +</button></div>';
card.querySelector(".add").addEventListener("click",()=>{const size=card.querySelector("select").value;const existing=cart.find(i=>i.id===p.id&&i.size===size);if(existing){if(existing.qty>=99)return;existing.qty++}else cart.push({id:p.id,size,qty:1});saveCart();announce(p.name+" toegevoegd aan je winkelmand.");});
grid.append(card);
});
}
function updateCart(){
document.getElementById("cart-count").textContent=cart.reduce((n,i)=>n+i.qty,0);
const items=document.getElementById("cart-items");items.replaceChildren();let total=0;
if(!cart.length){const empty=document.createElement("p");empty.textContent="Je winkelmand is nog leeg. Ontdek jouw favoriet in de collectie.";items.append(empty);}
cart.forEach((item,index)=>{const p=products.find(p=>p.id===item.id);total+=p.price*item.qty;const row=document.createElement("div");row.className="cart-row";const info=document.createElement("div");const title=document.createElement("strong");title.textContent=p.name;const details=document.createElement("p");details.textContent=item.size+" · "+item.qty+" stuk"+(item.qty>1?"s":"");const remove=document.createElement("button");remove.className="remove";remove.textContent="Verwijderen";remove.setAttribute("aria-label",p.name+" maat "+item.size+" verwijderen");remove.addEventListener("click",()=>{cart.splice(index,1);saveCart()});info.append(title,details,remove);const price=document.createElement("span");price.textContent=money(p.price*item.qty);row.append(info,price);items.append(row);});
document.getElementById("cart-total").textContent=money(total);
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