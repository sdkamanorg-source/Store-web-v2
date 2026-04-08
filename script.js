// ================== ITEMS ==================
const items = [
  {name: "Spawner Key x4", price: "₹39"},
  {name: "Fire Key x4", price: "₹69"},
  {name: "Matrix Key x4", price: "₹89"},
  {name: "Ambani Key x4", price: "₹99"},
  {name: "Deadly+ Rank", price: "₹699 / Month"},
  {name: "Deadly Rank", price: "₹249 / Month"},
  {name: "Deadliest Rank", price: "₹199 / Month"},
  {name: "Immortal Rank", price: "₹199 / Month"},
  {name: "Elite Rank", price: "₹79 / Month"},
  {name: "Ace Rank", price: "₹99 / Month"}
];

const container = document.getElementById("store");

// ================== CREATE CARDS ==================
items.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.price}</p>
    <button class="buy-btn">Buy On Discord</button>
  `;

  card.querySelector(".buy-btn").addEventListener("click", () => {
    openModal(item.name);
  });

  container.appendChild(card);
});

// ================== MODAL ==================
function openModal(name){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("itemName").innerText = name;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// ================== SCROLL ==================
function scrollToStore(){
  document.getElementById("storeSection").scrollIntoView({
    behavior: "smooth"
  });
}

// ================== COPY SERVER IP ==================
function copyIP(){
  const ip = "deadlymc.boysonly.fun";
  navigator.clipboard.writeText(ip);

  const btn = document.getElementById("copyBtn");
  btn.innerText = "Copied!";
  setTimeout(()=> btn.innerText = "Copy IP", 1500);
}

// ================== PARTICLES FIX ==================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2,
    dx: Math.random()-0.5,
    dy: Math.random()-0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "#00c6ff";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0||p.x>canvas.width) p.dx *= -1;
    if(p.y<0||p.y>canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}
animate();

// ================== 3D TILT ==================
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".card").forEach(card => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height/2) / 15;
    const rotateY = (x - rect.width/2) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
