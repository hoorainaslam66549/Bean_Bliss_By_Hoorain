const PRODUCTS=[
{id:1,name:"Velvet Latte",cat:"hot-coffee",price:650,img:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=85",desc:"Silky espresso with steamed milk.",tag:"BESTSELLER"},
{id:2,name:"Classic Cappuccino",cat:"hot-coffee",price:580,img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=85",desc:"Rich espresso with a cloud of foam.",tag:""},
{id:3,name:"Caramel Macchiato",cat:"hot-coffee",price:720,img:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=700&q=85",desc:"Espresso, velvety milk and caramel.",tag:"NEW"},
{id:4,name:"Mocha",cat:"hot-coffee",price:690,img:"https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=85",desc:"Chocolate, espresso and steamed milk.",tag:""},
{id:5,name:"Americano",cat:"hot-coffee",price:480,img:"https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=700&q=85",desc:"Bold espresso lengthened with hot water.",tag:""},
{id:6,name:"Flat White",cat:"hot-coffee",price:620,img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=85",desc:"Double espresso with silky microfoam.",tag:""},
{id:7,name:"Spanish Latte",cat:"hot-coffee",price:700,img:"https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=85",desc:"Creamy espresso with a sweet finish.",tag:"POPULAR"},
{id:8,name:"Caramel Cold Brew",cat:"cold-coffee",price:720,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",desc:"Slow-steeped coffee with caramel notes.",tag:"NEW"},
{id:9,name:"Iced Mocha",cat:"cold-coffee",price:690,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",desc:"Chilled espresso, chocolate and milk.",tag:""},
{id:10,name:"Iced Vanilla Latte",cat:"cold-coffee",price:680,img:"https://images.unsplash.com/photo-1461988091159-192b6df7054f?auto=format&fit=crop&w=700&q=85",desc:"Smooth espresso with vanilla over ice.",tag:""},
{id:11,name:"Affogato",cat:"cold-coffee",price:750,img:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=85",desc:"Vanilla gelato drowned in hot espresso.",tag:"PREMIUM"},
{id:12,name:"Matcha Latte",cat:"non-coffee",price:650,img:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=700&q=85",desc:"Creamy ceremonial-style matcha latte.",tag:""},
{id:13,name:"Hot Chocolate",cat:"non-coffee",price:600,img:"https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=85",desc:"Rich chocolate topped with soft foam.",tag:""},
{id:14,name:"Chai Latte",cat:"non-coffee",price:560,img:"https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=700&q=85",desc:"Warm spiced tea with creamy milk.",tag:""},
{id:15,name:"Butter Croissant",cat:"bakery",price:420,img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85",desc:"Flaky, golden and baked fresh.",tag:""},
{id:16,name:"Chocolate Brownie",cat:"bakery",price:450,img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85",desc:"Fudgy center with dark chocolate.",tag:""},
{id:17,name:"Cinnamon Roll",cat:"bakery",price:480,img:"https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=85",desc:"Soft cinnamon swirl with sweet glaze.",tag:"POPULAR"},
{id:18,name:"Blueberry Muffin",cat:"bakery",price:430,img:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=85",desc:"Tender muffin packed with blueberries.",tag:""},
{id:19,name:"House Blend 250g",cat:"beans",price:1450,img:"https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=85",desc:"Balanced Arabica with cocoa notes.",tag:""},
{id:20,name:"Ethiopian Roast 250g",cat:"beans",price:1750,img:"https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=700&q=85",desc:"Bright, floral and naturally sweet.",tag:"PREMIUM"}
];

const money=n=>"Rs. "+n.toLocaleString("en-PK");
function getCart(){return JSON.parse(localStorage.getItem("beanBlissCart")||"[]")}
function saveCart(c){localStorage.setItem("beanBlissCart",JSON.stringify(c));updateCount()}
function updateCount(){document.querySelectorAll(".cart-count").forEach(e=>e.textContent=getCart().reduce((s,x)=>s+x.qty,0))}
function toast(msg){const t=document.getElementById("toast");if(!t)return;t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function addToCart(id){let c=getCart(), item=c.find(x=>x.id===id);item?item.qty++:c.push({id,qty:1});saveCart(c);toast("Added to your cart ☕")}
function productCard(p){return `<article class="product-card" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">${p.tag?`<span class="badge">${p.tag}</span>`:""}<img src="${p.img}" alt="${p.name}"><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-btn" onclick="addToCart(${p.id})">+ Add</button></div></div></article>`}
function renderProducts(list,el){el.innerHTML=list.map(productCard).join("")||'<div class="empty">No coffee found. Try another search.</div>'}
function initProductPage(){const grid=document.getElementById("productGrid");if(!grid)return;let active="all",query="";const refresh=()=>{const list=PRODUCTS.filter(p=>(active==="all"||p.cat===active)&&p.name.toLowerCase().includes(query));renderProducts(list,grid);const label=document.getElementById("resultLabel");if(label)label.textContent=`Showing ${list.length} item${list.length===1?"":"s"}`};document.querySelectorAll(".category-card").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".category-card").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");active=b.dataset.filter;refresh()}));document.getElementById("productSearch").addEventListener("input",e=>{query=e.target.value.toLowerCase();refresh()});refresh()}
function initFeatured(){const el=document.getElementById("featuredProducts");if(el)renderProducts(PRODUCTS.slice(0,3),el)}
function renderCart(){const el=document.getElementById("cartItems");if(!el)return;let c=getCart();if(!c.length){el.innerHTML='<div class="empty"><h2>Your cart is empty</h2><p>Looks like your cup is waiting to be filled.</p><a class="btn primary" href="products.html">Browse Menu</a></div>';["subtotal","delivery","total"].forEach(id=>document.getElementById(id).textContent="Rs. 0");return}el.innerHTML=c.map(x=>{const p=PRODUCTS.find(y=>y.id===x.id);return `<div class="cart-row"><img src="${p.img}" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)} each</p><button class="remove" onclick="removeItem(${p.id})">Remove</button></div><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><b>${x.qty}</b><button onclick="changeQty(${p.id},1)">+</button><strong>${money(p.price*x.qty)}</strong></div></div>`}).join("");let sub=c.reduce((s,x)=>s+PRODUCTS.find(p=>p.id===x.id).price*x.qty,0),del=sub?200:0;document.getElementById("subtotal").textContent=money(sub);document.getElementById("delivery").textContent=money(del);document.getElementById("total").textContent=money(sub+del)}
function changeQty(id,n){let c=getCart(),x=c.find(i=>i.id===id);x.qty+=n;if(x.qty<=0)c=c.filter(i=>i.id!==id);saveCart(c);renderCart()}
function removeItem(id){saveCart(getCart().filter(x=>x.id!==id));renderCart();toast("Item removed")}
function initCheckout(){const el=document.getElementById("checkoutSummary");if(!el)return;const c=getCart();if(!c.length){el.innerHTML='<p>Your cart is empty.</p><a class="text-link" href="products.html">Return to menu →</a>';return}let sub=c.reduce((s,x)=>s+PRODUCTS.find(p=>p.id===x.id).price*x.qty,0),del=200;el.innerHTML=c.map(x=>{const p=PRODUCTS.find(p=>p.id===x.id);return `<div class="checkout-item"><span>${p.name} × ${x.qty}</span><b>${money(p.price*x.qty)}</b></div>`}).join("")+`<hr><div class="checkout-item"><span>Delivery</span><b>${money(del)}</b></div><div class="checkout-item"><strong>Total</strong><strong>${money(sub+del)}</strong></div>`}
document.addEventListener("DOMContentLoaded",()=>{updateCount();initFeatured();initProductPage();renderCart();initCheckout();
const menu=document.querySelector(".menu-toggle"),nav=document.getElementById("navMenu");if(menu&&nav)menu.addEventListener("click",()=>nav.classList.toggle("open"));
const nl=document.getElementById("newsletterForm");if(nl)nl.addEventListener("submit",e=>{e.preventDefault();if(document.getElementById("newsletterEmail").checkValidity())toast("You're on the list! ☕");});
const cf=document.getElementById("contactForm");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();if(cf.checkValidity()){toast("Message sent successfully!");cf.reset()}});
document.querySelectorAll(".gateway").forEach(g=>g.addEventListener("click",()=>{document.querySelectorAll(".gateway").forEach(x=>x.classList.remove("selected"));g.classList.add("selected")}));
const checkout=document.getElementById("checkoutForm");if(checkout)checkout.addEventListener("submit",e=>{e.preventDefault();if(!checkout.checkValidity())return;const c=getCart();if(!c.length){toast("Your cart is empty");return}document.getElementById("successModal").classList.add("show");localStorage.removeItem("beanBlissCart");updateCount()});
const cb=document.getElementById("checkoutBtn");if(cb)cb.addEventListener("click",()=>{if(getCart().length)location.href="checkout.html";else toast("Add an item first")});
});
// Smooth transition when moving between internal pages.
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('a[href]').forEach(link=>{
    const href=link.getAttribute("href");
    if(!href || href.startsWith("#") || link.target==="_blank" || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return;
    link.addEventListener("click",e=>{
      if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return;
      e.preventDefault();
      document.body.classList.add("page-leaving");
      setTimeout(()=>window.location.href=href,230);
    });
  });
});
