// ITEMS
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

// CREATE CARDS
items.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.price}</p>
    <button class="buy-btn" onclick="openModal('${item.name}')">Buy On Discord</button>
  `;

  container.appendChild(card);
});

// MODAL
function openModal(name){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("itemName").innerText = name;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// SCROLL
function scrollToStore(){
  document.getElementById("storeSection").scrollIntoView({behavior:'smooth'});
}

// 🔥 PARTICLES
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
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
    ctx.fillStyle = \"orange\";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0||p.x>canvas.width) p.dx *= -1;
    if(p.y<0||p.y>canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}

animate();
