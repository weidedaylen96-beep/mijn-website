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
products.unshift(
{id:"ivory-zip-jacket",name:"REVE Drift Zip Jacket",color:"Ivory",category:"jassen",price:6495,type:"jacket",image:"/ivory-zip-jacket.png",bg:"#e8e3d9",fabric:"#dfd8cb",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een REVE-ontwerpconcept met een ontspannen silhouet, ritssluiting en subtiele merkdetails in ivory. Combineer het met de Drift Jogger voor een compleet setje."},
{id:"black-zip-jacket",name:"REVE Night Zip Jacket",color:"Washed black",category:"jassen",price:6495,type:"jacket",image:"/black-zip-jacket.png",bg:"#e8e3d9",fabric:"#343630",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een rustig REVE-ontwerpconcept in washed black, met een ritssluiting en een ruime vorm. Ontworpen om samen te dragen met de Night Jogger."},
{id:"blue-studio-jacket",name:"REVE Cloud Studio Jacket",color:"Dusty blue",category:"jassen",price:6995,type:"jacket",image:"/blue-studio-jacket.png",bg:"#e8e3d9",fabric:"#8297a5",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een REVE Studio-ontwerpconcept in dusty blue. De ontspannen belijning en eigen REVE-signatuur vormen samen met de Cloud Relaxed Pants een compleet geheel."},
{id:"sage-knit-sweater",name:"REVE Sage Knit",color:"Muted sage",category:"knitwear",price:5995,type:"knit",image:"/sage-knit-sweater.png",bg:"#e8e3d9",fabric:"#9aa28b",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een REVE-ontwerpconcept voor een gebreide trui in muted sage, met rustige lijnen en een subtiel REVE-logo. Een nieuwe laag voor jouw eigen dagelijkse stijl."},
{id:"ivory-tracksuit-pants",name:"REVE Drift Jogger",color:"Ivory",category:"broeken",price:4995,type:"pants",image:"/ivory-tracksuit-pants.png",bg:"#e8e3d9",fabric:"#dfd8cb",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een REVE-broekconcept met een ontspannen lijn in ivory. Combineer deze jogger met het Drift Zip Jacket, of geef je eigen REVE-selectie een lichte basis."},
{id:"black-tracksuit-pants",name:"REVE Night Jogger",color:"Washed black",category:"broeken",price:4995,type:"pants",image:"/black-tracksuit-pants.png",bg:"#e8e3d9",fabric:"#343630",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een REVE-broekconcept in washed black met een ontspannen silhouet. Dezelfde kleurfamilie als het Night Zip Jacket voor een rustig, compleet setje."},
{id:"blue-studio-pants",name:"REVE Cloud Relaxed Pants",color:"Dusty blue",category:"broeken",price:5495,type:"pants",image:"/blue-studio-pants.png",bg:"#e8e3d9",fabric:"#8297a5",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een REVE Studio-broekconcept in dusty blue met ruimte in de vorm. Ontworpen als partner van het Cloud Studio Jacket en als los stuk in jouw garderobe."},
{id:"blue-denim-jeans",name:"REVE Blue Barrel Jeans",color:"Blue wash",category:"broeken",price:7495,type:"pants",image:"/blue-denim-jeans.png",bg:"#e8e3d9",fabric:"#6e8297",sizes:["XS","S","M","L","XL"],audience:"unisex",isNew:true,description:"Een eigen REVE-jeansconcept in blue wash, met een rondere barrel-belijning. Combineer de rustige kleur met de Sage Knit, een boxy tee of jouw favoriete REVE-jacket."}
);
products.forEach(p=>{p.isNew=false;});
products.unshift(
{id:"oatmeal-zip-hoodie",name:"REVE Oat Zip Hoodie",color:"Oatmeal",category:"hoodies",price:7495,type:"hoodie",image:"/oatmeal-zip-hoodie.png",bg:"#e8e3d9",fabric:"#c8bdab",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"03",isNew:true,description:"Een REVE-hoodieconcept in oatmeal met een ritssluiting, ruime vorm en eigen merkdetails. Samen met de Oat Jogger en Court Sneaker vormt dit een lichte, complete look."},
{id:"oatmeal-jogger",name:"REVE Oat Jogger",color:"Oatmeal",category:"broeken",price:5495,type:"pants",image:"/oatmeal-jogger.png",bg:"#e8e3d9",fabric:"#c8bdab",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"03",isNew:true,description:"Een ontspannen REVE-joggerconcept in oatmeal. De zachte kleurlijn sluit aan op de Oat Zip Hoodie, met ruimte voor jouw eigen combinaties."},
{id:"espresso-track-jacket",name:"REVE Espresso Track Jacket",color:"Espresso",category:"jassen",price:7995,type:"jacket",image:"/espresso-track-jacket.png",bg:"#e8e3d9",fabric:"#554239",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"03",isNew:true,description:"Een REVE-trackjacketconcept in diep espresso met een sportieve belijning en rustige merkdetails. Combineer de vorm met de bijpassende Track Pants en Terrain Runner."},
{id:"espresso-track-pants",name:"REVE Espresso Track Pants",color:"Espresso",category:"broeken",price:5995,type:"pants",image:"/espresso-track-pants.png",bg:"#e8e3d9",fabric:"#554239",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"03",isNew:true,description:"Een REVE-trackbroekconcept in espresso, met een ontspannen lijn en eigen signatuur. Ontworpen als partner van het Espresso Track Jacket en als los stuk in jouw selectie."},
{id:"cream-overshirt",name:"REVE Form Overshirt",color:"Warm cream",category:"jassen",price:7495,type:"jacket",image:"/cream-overshirt.png",bg:"#e8e3d9",fabric:"#dfd8cb",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"03",isNew:true,description:"Een REVE-overshirtconcept in warm cream met een rechte vorm en subtiele merkdetails. Draag het in de Form-look met de Charcoal Straight Pants en Sand Slip-On."},
{id:"charcoal-straight-pants",name:"REVE Charcoal Straight Pants",color:"Charcoal",category:"broeken",price:6495,type:"pants",image:"/charcoal-straight-pants.png",bg:"#e8e3d9",fabric:"#42423e",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"03",isNew:true,description:"Een REVE-broekconcept in charcoal met een rechte, rustige belijning. Een donkere basis voor het Form Overshirt en andere lichte stukken uit de ontwerpcollectie."},
{id:"cream-court-sneaker",name:"REVE Court Sneaker",color:"Cream",category:"schoenen",price:9995,type:"shoe",image:"/cream-court-sneaker.png",bg:"#e8e3d9",fabric:"#dfd8cb",sizes:["36","37","38","39","40","41","42","43","44","45","46"],audience:"unisex",drop:"03",isNew:true,description:"Een origineel REVE-sneakerconcept in cream, met een laag silhouet en eigen merkdetails. Een rustige afsluiting van de Oat-look; het afgebeelde ontwerp is een eerste visuele verkenning."},
{id:"olive-trail-runner",name:"REVE Terrain Runner",color:"Cream / olive",category:"schoenen",price:11995,type:"shoe",image:"/olive-trail-runner.png",bg:"#e8e3d9",fabric:"#787f5c",sizes:["36","37","38","39","40","41","42","43","44","45","46"],audience:"unisex",drop:"03",isNew:true,description:"Een eigen REVE-runnerconcept met een gelaagde vorm in cream en olive. De uitgesproken lijnen geven de Espresso-look een nieuw accent; dit is een visueel ontwerpconcept."},
{id:"sand-slip-on",name:"REVE Sand Slip-On",color:"Sand",category:"schoenen",price:6995,type:"shoe",image:"/sand-slip-on.png",bg:"#e8e3d9",fabric:"#c6b698",sizes:["36","37","38","39","40","41","42","43","44","45","46"],audience:"unisex",drop:"03",isNew:true,description:"Een REVE-slip-onconcept in sand met een eenvoudige vorm en eigen signatuur. Een rustig schoenontwerp om te combineren met het Form Overshirt en de Charcoal Straight Pants."}
);
products.forEach(p=>{p.isNew=false;});
products.unshift(
{id:"rose-runner",name:"REVE Rose Runner",color:"Dusty rose / cream",category:"schoenen",price:10995,type:"shoe",image:"/rose-runner.png",bg:"#efe7e3",fabric:"#c5a7a8",sizes:["36","37","38","39","40","41","42","43","44","45","46"],audience:"unisex",drop:"04",isNew:true,description:"Een origineel REVE-runnerconcept met een gelaagd silhouet in dusty rose en cream. Het eigen REVE-logo en de rustige kleurlijn verbinden deze schoen met de Rose Track-look."},
{id:"rose-track-jacket",name:"REVE Rose Track Jacket",color:"Dusty rose / cream",category:"jassen",price:7995,type:"jacket",image:"/rose-track-jacket.png",bg:"#efe7e3",fabric:"#c5a7a8",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"04",isNew:true,description:"Een eigen REVE-trackjacketconcept in dusty rose met cream als accent. De ontspannen belijning vormt samen met de Rose Track Pants en Rose Runner een complete REVE-look."},
{id:"rose-track-pants",name:"REVE Rose Track Pants",color:"Dusty rose / cream",category:"broeken",price:5995,type:"pants",image:"/rose-track-pants.png",bg:"#efe7e3",fabric:"#c5a7a8",sizes:["XS","S","M","L","XL"],audience:"unisex",drop:"04",isNew:true,description:"Een REVE-trackbroekconcept in dusty rose met een ontspannen, rechte vorm. Ontworpen in dezelfde kleurfamilie als het Rose Track Jacket, met een subtiele eigen REVE-signatuur."},
{id:"rose-cap",name:"REVE Rose Cap",color:"Dusty rose / cream",category:"petjes",price:2795,type:"cap",image:"/rose-cap.png",bg:"#efe7e3",fabric:"#c5a7a8",sizes:["One size"],audience:"unisex",drop:"04",isNew:true,description:"Een REVE-petjesconcept in dusty rose met het eigen REVE-logo als rustig accent. Een finishing touch voor de Rose-look of jouw eigen dagelijkse combinatie."},
{id:"rose-crossbody",name:"REVE Rose Crossbody",color:"Dusty rose / cream",category:"accessoires",price:3995,type:"cap",image:"/rose-crossbody.png",bg:"#efe7e3",fabric:"#c5a7a8",sizes:["One size"],audience:"unisex",drop:"04",isNew:true,description:"Een origineel REVE-tasconcept in dusty rose en cream, met een compact crossbody-silhouet en eigen merkdetails. De afmetingen en uitvoering worden bevestigd voor verkoop."}
);
products.forEach(p=>{p.description=(p.description||((p.line==="core"?"REVE Core: rustige oversized basics met een subtiel REVE-logo. ":"")+"Origineel REVE-ontwerpconcept in "+p.color+"."))+" Materiaal, afmetingen, productie en definitieve verkoopprijs worden vastgesteld voor de verkoop start.";});
// Drop 05: one hundred original REVE product concepts, with individual generated images.
products.forEach(p=>{p.isNew=false;});
const capsuleProducts = [
  {
    "id": "drop100-stone-tee",
    "name": "REVE Stone Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 3995,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-hoodie",
    "name": "REVE Stone Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 7995,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-jacket",
    "name": "REVE Stone Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 9995,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-sweatpants",
    "name": "REVE Stone Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 6495,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-utility-pants",
    "name": "REVE Stone Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 8495,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-knit",
    "name": "REVE Stone Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 7495,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-cap",
    "name": "REVE Stone Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 2995,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-sneaker",
    "name": "REVE Stone Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 11995,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-bag",
    "name": "REVE Stone Crossbody",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 4995,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-stone-accessory",
    "name": "REVE Stone Key Strap",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 1995,
    "color": "Warm stone / cream",
    "image": "/merch100/drop100-stone-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Stone Capsule in warm stone / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-tee",
    "name": "REVE Slate Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 4495,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-hoodie",
    "name": "REVE Slate Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 8495,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-jacket",
    "name": "REVE Slate Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 10495,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-sweatpants",
    "name": "REVE Slate Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 6995,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-utility-pants",
    "name": "REVE Slate Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 8995,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-knit",
    "name": "REVE Slate Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 7995,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-cap",
    "name": "REVE Slate Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 3495,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-sneaker",
    "name": "REVE Slate Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 12495,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-bag",
    "name": "REVE Slate Belt Bag",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 5495,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-slate-accessory",
    "name": "REVE Slate Cardholder",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#777c7d",
    "price": 2495,
    "color": "Slate grey / black",
    "image": "/merch100/drop100-slate-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "slate",
    "capsuleName": "Slate",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Slate Capsule in slate grey / black. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-tee",
    "name": "REVE Forest Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 4995,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-hoodie",
    "name": "REVE Forest Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 8995,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-jacket",
    "name": "REVE Forest Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 10995,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-sweatpants",
    "name": "REVE Forest Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 7495,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-utility-pants",
    "name": "REVE Forest Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 9495,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-knit",
    "name": "REVE Forest Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 8495,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-cap",
    "name": "REVE Forest Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 3995,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-sneaker",
    "name": "REVE Forest Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 12995,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-bag",
    "name": "REVE Forest Sling Bag",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 5995,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-forest-accessory",
    "name": "REVE Forest Crew Socks",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 2995,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop100-forest-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Forest Capsule in deep forest / ecru. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-tee",
    "name": "REVE Dune Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 3995,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-hoodie",
    "name": "REVE Dune Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 7995,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-jacket",
    "name": "REVE Dune Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 9995,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-sweatpants",
    "name": "REVE Dune Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 6495,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-utility-pants",
    "name": "REVE Dune Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 8495,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-knit",
    "name": "REVE Dune Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 7495,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-cap",
    "name": "REVE Dune Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 2995,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-sneaker",
    "name": "REVE Dune Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 11995,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-bag",
    "name": "REVE Dune Shoulder Tote",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 4995,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-dune-accessory",
    "name": "REVE Dune Woven Belt",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#c4af87",
    "price": 1995,
    "color": "Sand / espresso",
    "image": "/merch100/drop100-dune-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "dune",
    "capsuleName": "Dune",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Dune Capsule in sand / espresso. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-tee",
    "name": "REVE Night Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 4495,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-hoodie",
    "name": "REVE Night Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 8495,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-jacket",
    "name": "REVE Night Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 10495,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-sweatpants",
    "name": "REVE Night Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 6995,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-utility-pants",
    "name": "REVE Night Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 8995,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-knit",
    "name": "REVE Night Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 7995,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-cap",
    "name": "REVE Night Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 3495,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-sneaker",
    "name": "REVE Night Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 12495,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-bag",
    "name": "REVE Night Messenger Bag",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 5495,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-night-accessory",
    "name": "REVE Night Zip Wallet",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#353635",
    "price": 2495,
    "color": "Washed black / silver",
    "image": "/merch100/drop100-night-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "night",
    "capsuleName": "Night",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Night Capsule in washed black / silver. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-tee",
    "name": "REVE Cloud Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 4995,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-hoodie",
    "name": "REVE Cloud Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 8995,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-jacket",
    "name": "REVE Cloud Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 10995,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-sweatpants",
    "name": "REVE Cloud Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 7495,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-utility-pants",
    "name": "REVE Cloud Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 9495,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-knit",
    "name": "REVE Cloud Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 8495,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-cap",
    "name": "REVE Cloud Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 3995,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-sneaker",
    "name": "REVE Cloud Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 12995,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-bag",
    "name": "REVE Cloud Crescent Bag",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 5995,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-cloud-accessory",
    "name": "REVE Cloud Knit Beanie",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 2995,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop100-cloud-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Cloud Capsule in dusty blue / cream. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-tee",
    "name": "REVE Rosewood Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 3995,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-hoodie",
    "name": "REVE Rosewood Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 7995,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-jacket",
    "name": "REVE Rosewood Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 9995,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-sweatpants",
    "name": "REVE Rosewood Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 6495,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-utility-pants",
    "name": "REVE Rosewood Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 8495,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-knit",
    "name": "REVE Rosewood Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 7495,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-cap",
    "name": "REVE Rosewood Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 2995,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-sneaker",
    "name": "REVE Rosewood Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 11995,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-bag",
    "name": "REVE Rosewood Quilted Crossbody",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 4995,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-rosewood-accessory",
    "name": "REVE Rosewood Knit Scarf",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 1995,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop100-rosewood-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Rosewood Capsule in muted rosewood / taupe. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-tee",
    "name": "REVE Ocean Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 4495,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-hoodie",
    "name": "REVE Ocean Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 8495,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-jacket",
    "name": "REVE Ocean Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 10495,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-sweatpants",
    "name": "REVE Ocean Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 6995,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-utility-pants",
    "name": "REVE Ocean Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 8995,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-knit",
    "name": "REVE Ocean Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 7995,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-cap",
    "name": "REVE Ocean Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 3495,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-sneaker",
    "name": "REVE Ocean Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 12495,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-bag",
    "name": "REVE Ocean Sport Waist Bag",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 5495,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-ocean-accessory",
    "name": "REVE Ocean Lanyard",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#344a64",
    "price": 2495,
    "color": "Deep navy / pale blue",
    "image": "/merch100/drop100-ocean-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "ocean",
    "capsuleName": "Ocean",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Ocean Capsule in deep navy / pale blue. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-tee",
    "name": "REVE Clay Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 4995,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-hoodie",
    "name": "REVE Clay Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 8995,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-jacket",
    "name": "REVE Clay Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 10995,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-sweatpants",
    "name": "REVE Clay Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 7495,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-utility-pants",
    "name": "REVE Clay Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 9495,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-knit",
    "name": "REVE Clay Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 8495,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-cap",
    "name": "REVE Clay Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 3995,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-sneaker",
    "name": "REVE Clay Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 12995,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-bag",
    "name": "REVE Clay Utility Crossbody",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 5995,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-clay-accessory",
    "name": "REVE Clay Zip Pouch",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#b78060",
    "price": 2995,
    "color": "Terracotta / oat",
    "image": "/merch100/drop100-clay-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "clay",
    "capsuleName": "Clay",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Clay Capsule in terracotta / oat. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-tee",
    "name": "REVE Pearl Box Tee",
    "category": "shirts",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 3995,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-tee.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-hoodie",
    "name": "REVE Pearl Studio Hoodie",
    "category": "hoodies",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 7995,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-hoodie.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-jacket",
    "name": "REVE Pearl Track Jacket",
    "category": "jassen",
    "type": "hoodie",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 9995,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-jacket.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-sweatpants",
    "name": "REVE Pearl Relaxed Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 6495,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-sweatpants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-utility-pants",
    "name": "REVE Pearl Utility Pants",
    "category": "broeken",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 8495,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-utility-pants.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-knit",
    "name": "REVE Pearl Knit Crew",
    "category": "knitwear",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 7495,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-knit.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-cap",
    "name": "REVE Pearl Signature Cap",
    "category": "petjes",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 2995,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-cap.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-sneaker",
    "name": "REVE Pearl Original Sneaker",
    "category": "schoenen",
    "type": "tee",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 11995,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-sneaker.webp",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-bag",
    "name": "REVE Pearl Structured Shoulder Bag",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 4995,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-bag.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  },
  {
    "id": "drop100-pearl-accessory",
    "name": "REVE Pearl Studio Bottle",
    "category": "accessoires",
    "type": "cap",
    "bg": "#f3efe8",
    "fabric": "#d9d5c9",
    "price": 1995,
    "color": "Ivory / charcoal",
    "image": "/merch100/drop100-pearl-accessory.webp",
    "sizes": [
      "One size"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "pearl",
    "capsuleName": "Pearl",
    "drop": "05",
    "description": "Een origineel REVE-ontwerp uit de Pearl Capsule in ivory / charcoal. Een eigen silhouet met een subtiele REVE-signatuur. Dit is een ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "merch100": true
  }
];
const summerShortProducts = [
  {
    "id": "drop05-stone-shorts",
    "name": "REVE Stone Summer Shorts",
    "category": "broeken",
    "type": "pants",
    "bg": "#f3efe8",
    "fabric": "#b5aa96",
    "price": 4495,
    "color": "Warm stone / cream",
    "image": "/merch100/drop05-stone-shorts.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "stone",
    "capsuleName": "Stone",
    "drop": "05",
    "description": "Een korte REVE-broek in warm stone / cream, ontworpen als zomers setje bij het bijpassende REVE-shirt. Een origineel ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "summerShort": true
  },
  {
    "id": "drop05-forest-shorts",
    "name": "REVE Forest Summer Shorts",
    "category": "broeken",
    "type": "pants",
    "bg": "#f3efe8",
    "fabric": "#3e5446",
    "price": 4495,
    "color": "Deep forest / ecru",
    "image": "/merch100/drop05-forest-shorts.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "forest",
    "capsuleName": "Forest",
    "drop": "05",
    "description": "Een korte REVE-broek in deep forest / ecru, ontworpen als zomers setje bij het bijpassende REVE-shirt. Een origineel ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "summerShort": true
  },
  {
    "id": "drop05-cloud-shorts",
    "name": "REVE Cloud Summer Shorts",
    "category": "broeken",
    "type": "pants",
    "bg": "#f3efe8",
    "fabric": "#a5bdc8",
    "price": 4495,
    "color": "Dusty blue / cream",
    "image": "/merch100/drop05-cloud-shorts.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "cloud",
    "capsuleName": "Cloud",
    "drop": "05",
    "description": "Een korte REVE-broek in dusty blue / cream, ontworpen als zomers setje bij het bijpassende REVE-shirt. Een origineel ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "summerShort": true
  },
  {
    "id": "drop05-rosewood-shorts",
    "name": "REVE Rosewood Summer Shorts",
    "category": "broeken",
    "type": "pants",
    "bg": "#f3efe8",
    "fabric": "#a97979",
    "price": 4495,
    "color": "Muted rosewood / taupe",
    "image": "/merch100/drop05-rosewood-shorts.webp",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "audience": "unisex",
    "isNew": true,
    "capsule": "rosewood",
    "capsuleName": "Rosewood",
    "drop": "05",
    "description": "Een korte REVE-broek in muted rosewood / taupe, ontworpen als zomers setje bij het bijpassende REVE-shirt. Een origineel ontwerpconcept; materiaal, afmetingen, pasvorm, productie en definitieve prijs worden bevestigd voordat de verkoop opent.",
    "summerShort": true
  }
];
products=[...capsuleProducts,...summerShortProducts,...products];
const money = value => new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR"}).format(value/100);
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[c]));
function illustration(p) {
if(p.image)return '<img class="product-photo" src="'+escapeHTML(p.image)+'" alt="'+escapeHTML(p.name)+'" loading="lazy">';
const shape = p.type === "cap" ? '<path d="M90 203Q90 80 200 75Q310 80 310 203Z"/><path d="M90 200Q180 178 310 203L355 248Q260 285 80 229Z"/><path d="M200 80V195" fill="none" stroke="#000" stroke-opacity=".12"/>' : p.type === "hoodie" ? '<path d="M151 108Q150 42 200 42Q250 42 249 108L300 130 350 305 288 321 265 220 273 354H127L135 220 112 321 50 305 100 130Z"/><path d="M151 108Q200 155 249 108M150 285h100l12 43H138Z" fill="none" stroke="#000" stroke-opacity=".15"/><path d="M181 135v65m38-65v65" stroke="#f5f1e8" stroke-width="3"/>' : '<path d="M144 90 100 110 48 195 113 228 133 198 124 344Q200 363 276 344L267 198 287 228 352 195 300 110 256 90 232 82Q200 103 168 82Z"/><path d="M168 83Q200 125 232 83" fill="none" stroke="#000" stroke-opacity=".15" stroke-width="7"/>';
return '<svg viewBox="0 0 400 400" role="img" aria-label="Illustratie van '+p.name+'"><g fill="'+p.fabric+'" stroke="'+p.fabric+'" stroke-width="2">'+shape+'</g><text x="200" y="'+(p.type==="cap"?172:220)+'" text-anchor="middle" fill="#f4f1ea" font-family="Arial,sans-serif" font-size="'+(p.type==="cap"?18:23)+'" font-weight="bold" letter-spacing="4">REVE</text></svg>';
}
const sizesFor = p => p.sizes || (p.type === "cap" ? ["One size"] : ["XS","S","M","L","XL"]);
const baseCatalog=products.map(p=>({...p}));
function stockInfo(p){
const stock=Number.isInteger(p.stock)&&p.stock>=0&&p.stock<=1000000?p.stock:null;
return {stock,text:stock===null?(p.isOwnerProduct?'Voorraad nog niet opgegeven':'Voorraad nog niet bevestigd'):stock===0?'Uitverkocht':'Nog '+stock+' op voorraad',state:stock===null?'unknown':stock===0?'empty':'available'};
}
function stockMarkup(p){const info=stockInfo(p);return '<p class="stock-label stock-'+info.state+'">'+info.text+(info.stock!==null?' · totaal over alle maten':'')+'</p>';}
async function loadCatalog(){
const response=await fetch('/api/catalog',{cache:'no-store'});if(!response.ok)throw Error();const data=await response.json();
const inventory=data.inventory||{};
products=[...baseCatalog,...(Array.isArray(data.products)?data.products.map(p=>({...p,isOwnerProduct:true})):[])].map(p=>({...p,stock:Number.isInteger(inventory[p.id])&&inventory[p.id]>=0&&inventory[p.id]<=1000000?inventory[p.id]:null}));
cart=cart.filter(i=>products.some(p=>p.id===i.id&&sizesFor(p).includes(i.size)));renderProducts(activeFilter,true);updateCart();
const open=document.getElementById('product-dialog');if(open.open&&open.dataset.productId){const fresh=products.find(p=>p.id===open.dataset.productId);if(fresh)openProduct(fresh);else open.close();}
}
let activeFilter="all";
let displayLimit=24;
let cart = [];
try { const saved=JSON.parse(localStorage.getItem("reve-cart")||"[]"); if(Array.isArray(saved)) cart=saved.filter(i=>typeof i.id==="string"&&["XS","S","M","L","XL","One size","36","37","38","39","40","41","42","43","44","45","46","28","29","30","31","32","33","34","35","116","122","128","134","140","146","152","158","164","170"].includes(i.size)&&Number.isInteger(i.qty)&&i.qty>0&&i.qty<=99); } catch {}
function saveCart(){try{localStorage.setItem("reve-cart",JSON.stringify(cart))}catch{} updateCart();}
function renderProducts(filter=activeFilter,keepPage=false){
activeFilter=filter;if(!keepPage)displayLimit=24;
const grid=document.getElementById("products");
const selectedSizes=keepPage?new Map(Array.from(grid.children).filter(card=>card.dataset.productId).map(card=>[card.dataset.productId,card.querySelector('select')?.value])):new Map();
grid.replaceChildren();
const audience=document.getElementById("audience").value;
const capsule=document.getElementById("capsule")?.value||"all";
const query=document.getElementById("search").value.trim().toLocaleLowerCase("nl");
const sort=document.getElementById("sort").value;
const visible=products.filter(p=>(filter==="all"||p.category===filter||(filter==="core"&&p.line==="core")||(filter==="new"&&p.isNew))&&(audience==="all"||(p.audience||"unisex")===audience||((p.audience||"unisex")==="unisex"&&["dames","heren"].includes(audience)))&&(capsule==="all"||(p.capsule||"first-chapter")===capsule)&&[p.name,p.color,p.category,p.capsuleName||""].join(" ").toLocaleLowerCase("nl").includes(query));
visible.sort((a,b)=>sort==="low"?a.price-b.price:sort==="high"?b.price-a.price:sort==="name"?a.name.localeCompare(b.name):0);
const showing=Math.min(displayLimit,visible.length);
document.getElementById("result-count").textContent=visible.length+" producten"+(showing<visible.length?" · "+showing+" getoond":"");
const more=document.getElementById("load-more-products"),pager=document.getElementById("products-pager");if(more){more.hidden=showing>=visible.length;more.textContent="Meer ontwerpen tonen ("+Math.min(24,Math.max(0,visible.length-showing))+")";}if(pager)pager.hidden=showing>=visible.length;
if(!visible.length){const empty=document.createElement("div");empty.className="no-results";empty.innerHTML=["jongens","meisjes"].includes(audience)?"<h3>De kindercollectie komt later.</h3><p>Er zijn nog geen REVE-producten voor deze selectie. Bekijk ondertussen de volwassen ontwerpcollectie.</p>":"<h3>Geen kledingstukken gevonden.</h3><p>Probeer een andere zoekterm of bekijk de hele collectie.</p>";const reset=document.createElement("button");reset.className="button dark";reset.textContent="Toon alles";reset.onclick=()=>{document.getElementById("audience").value="all";if(document.getElementById("capsule"))document.getElementById("capsule").value="all";document.getElementById("search").value="";document.querySelector('[data-filter="all"]').click()};empty.append(reset);grid.append(empty);}
visible.slice(0,displayLimit).forEach(p=>{
p={...p,name:escapeHTML(p.name),color:escapeHTML(p.color)};
const card=document.createElement("article");card.className="product-card"+(p.category==="schoenen"?" product-shoe":"")+((p.merch100||p.summerShort)?" merch100-product":"");
card.dataset.productId=p.id;
card.innerHTML='<div class="product-art" style="--bg:'+p.bg+'"><span class="tag'+(p.isNew?' tag-new':'')+'">'+(p.isNew?'NIEUW REVE-ONTWERP':'FIRST CHAPTER')+'</span>'+illustration(p)+'</div><div class="product-heading"><h3>'+p.name+'</h3><span class="price">'+money(p.price)+'</span></div><p class="color">'+p.color+'</p>'+stockMarkup(p)+'<div class="product-actions"><select aria-label="Maat voor '+p.name+'">'+sizesFor(p).map(s=>'<option>'+s+'</option>').join("")+'</select><button class="add" type="button"'+(p.stock===0?' disabled':'')+'>'+(p.stock===0?'Uitverkocht':'In winkelmand +')+'</button></div>';
const selectedSize=selectedSizes.get(p.id);if(sizesFor(p).includes(selectedSize))card.querySelector('select').value=selectedSize;
card.querySelector(".add").addEventListener("click",()=>{const current=products.find(product=>product.id===p.id);if(!current||current.stock===0){announce('Dit product is uitverkocht.');return}const size=card.querySelector("select").value;const existing=cart.find(i=>i.id===p.id&&i.size===size);if(existing){if(existing.qty>=99)return;existing.qty++}else cart.push({id:p.id,size,qty:1});saveCart();announce(current.name+" toegevoegd aan je winkelmand.");});
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
p=products.find(product=>product.id===p.id)||p;
const productDialog=document.getElementById('product-dialog'),previousSize=productDialog.open&&productDialog.dataset.productId===p.id?document.getElementById('detail-size')?.value:null;
p={...p,name:escapeHTML(p.name),color:escapeHTML(p.color)};
const content=document.getElementById("product-content");
content.innerHTML='<div class="product-art'+(p.category==="schoenen"?' product-shoe':'')+((p.merch100||p.summerShort)?' product-capsule':'')+'" style="--bg:'+p.bg+'">'+illustration(p)+'</div><h2 id="product-title">'+p.name+'</h2><p>'+p.color+' · '+money(p.price)+'</p>'+stockMarkup(p)+(stockInfo(p).stock!==null?'<p class="stock-note">Totaal over alle maten, bijgehouden door REVE. Een winkelmand reserveert geen voorraad.</p>':'')+'<p class="product-description">'+(p.description?escapeHTML(p.description):p.type==='hoodie'?'Een ontspannen hoodie voor rustige ochtenden en lange avonden.':p.type==='cap'?'Een rustig accent voor je dagelijkse outfit.':'Een eenvoudig shirt met het REVE-logo, ontworpen als basis voor jouw eigen stijl.')+'</p>'+(p.isOwnerProduct?'':'<p class="concept-note">Ontwerpconcept. Materiaal, pasvorm en afmetingen worden bevestigd voor de verkoop start.</p>')+'<label class="size-label">Kies je maat<select id="detail-size">'+sizesFor(p).map(s=>'<option>'+s+'</option>').join('')+'</select></label><button id="detail-add" class="button dark"'+(p.stock===0?' disabled':'')+'>'+(p.stock===0?'Uitverkocht':'In winkelmand +')+'</button>';
document.getElementById('detail-add').onclick=()=>{const current=products.find(product=>product.id===p.id);if(!current||current.stock===0){announce('Dit product is uitverkocht.');return}const size=document.getElementById('detail-size').value;const existing=cart.find(i=>i.id===p.id&&i.size===size);if(existing&&existing.qty>=99){announce('Je hebt het maximum aantal voor deze maat bereikt.');return}if(existing)existing.qty++;else cart.push({id:p.id,size,qty:1});saveCart();announce(current.name+' toegevoegd aan je winkelmand.');};
if(previousSize&&sizesFor(p).includes(previousSize))document.getElementById('detail-size').value=previousSize;
productDialog.dataset.productId=p.id;if(!productDialog.open)productDialog.showModal();
}
document.getElementById('close-product').onclick=()=>document.getElementById('product-dialog').close();
document.getElementById('search').addEventListener('input',()=>renderProducts());
document.getElementById('sort').addEventListener('change',()=>renderProducts());
document.getElementById('clear-cart').onclick=()=>{cart=[];saveCart();announce('Je winkelmand is leeggemaakt.');document.getElementById('continue-shopping').focus();};
window.addEventListener('storage',event=>{if(event.key==='reve-cart'){try{const data=JSON.parse(event.newValue||'[]');cart=Array.isArray(data)?data.filter(i=>products.some(p=>p.id===i.id&&sizesFor(p).includes(i.size))&&Number.isInteger(i.qty)&&i.qty>0&&i.qty<=99):[];updateCart();}catch{}}});

(async()=>{try{await loadCatalog();}catch{const note=document.createElement('p');note.className='concept-note';note.textContent='Producten en voorraad konden niet worden vernieuwd. Vernieuw de pagina om opnieuw te proberen.';document.getElementById('products').before(note)}try{const response=await fetch('/api/catalog?me=1',{cache:'no-store'});const data=await response.json();document.getElementById('admin-link').hidden=!data.isOwner;}catch{}})();
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')loadCatalog().catch(()=>{});});

document.getElementById('show-core').onclick=()=>{document.getElementById('capsule').value='all';document.getElementById('search').value='';document.getElementById('audience').value='all';document.querySelector('[data-filter=core]').click();};

document.getElementById('audience').onchange=()=>renderProducts();

document.querySelectorAll("[data-discover]").forEach(link=>link.addEventListener("click",()=>{document.getElementById("search").value="";document.getElementById("audience").value="all";document.getElementById("capsule").value="all";document.querySelector(`[data-filter="${link.dataset.discover}"]`).click();}));

document.querySelectorAll('[data-rose-discover]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('search').value='Rose';document.getElementById('audience').value='all';document.getElementById('capsule').value='first-chapter';document.querySelector('[data-filter="all"]').click();}));

(async()=>{try{const response=await fetch('/api/session',{cache:'no-store'});if(!response.ok)throw Error();const session=await response.json();document.getElementById('account-link').textContent=session.authenticated?'Mijn account':'Inloggen';document.getElementById('checkout-login').hidden=session.authenticated;document.getElementById('checkout-unavailable').hidden=!session.authenticated;document.getElementById('account-status').textContent=session.authenticated?'Je bent ingelogd. Bestellen wordt beschikbaar zodra de winkel opent.':'Voor bestellen moet je inloggen of een ChatGPT-account aanmaken.';}catch{document.getElementById('account-status').textContent='Je loginstatus kon niet worden gecontroleerd. Open Mijn account om in te loggen.';}})();

// REVE outfit combinations use the existing product details and size selection.
const lookDialog=document.getElementById('look-dialog');
document.querySelectorAll('[data-look]').forEach(button=>button.addEventListener('click',()=>{const list=document.getElementById('look-items');list.replaceChildren();button.dataset.look.split(',').forEach(id=>{const product=products.find(p=>p.id===id);if(!product)return;const item=document.createElement('button');item.className='look-product'+(product.category==='schoenen'?' look-product-shoe':'')+((product.merch100||product.summerShort)?' look-product-capsule':'');item.innerHTML='<img src="'+escapeHTML(product.image)+'" alt="'+escapeHTML(product.name)+'"><span><strong>'+escapeHTML(product.name)+'</strong><small>'+money(product.price)+' · indicatief</small><span>Bekijk maten en ontwerp ↗</span></span>';item.onclick=()=>{lookDialog.close();openProduct(product)};list.append(item)});lookDialog.showModal()}));
document.getElementById('close-look').onclick=()=>lookDialog.close();
lookDialog.addEventListener('click',event=>{if(event.target===lookDialog){const r=lookDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)lookDialog.close()}});

document.querySelectorAll('[data-preview]').forEach(button=>button.addEventListener('click',()=>{const product=products.find(p=>p.id===button.dataset.preview);if(product)openProduct(product)}));

// Browse the larger collection without loading every product at once.
document.getElementById("capsule").addEventListener("change",()=>renderProducts());
document.getElementById("load-more-products").addEventListener("click",()=>{const previous=displayLimit;displayLimit+=24;renderProducts(activeFilter,true);const firstNew=document.querySelectorAll("#products .product-card")[previous];if(firstNew){firstNew.querySelector(".detail-button").focus({preventScroll:true});firstNew.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}announce("Meer REVE-ontwerpen getoond.");});
document.querySelectorAll("[data-capsule]").forEach(button=>button.addEventListener("click",()=>{document.getElementById("capsule").value=button.dataset.capsule;document.getElementById("audience").value="all";document.getElementById("search").value="";document.querySelector('[data-filter="all"]').click();document.getElementById("capsule").focus({preventScroll:true});document.getElementById("catalog-controls").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}));

document.querySelectorAll("[data-short-discover]").forEach(button=>button.addEventListener("click",()=>{document.getElementById("search").value="Summer Shorts";document.getElementById("audience").value="all";document.getElementById("capsule").value="all";document.querySelector('[data-filter="broeken"]').click();document.getElementById("search").focus({preventScroll:true});document.getElementById("catalog-controls").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}));
