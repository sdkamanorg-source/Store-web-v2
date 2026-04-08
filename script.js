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

items.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.price}</p>
    <button onclick="openModal('${item.name}')">Buy</button>
  `;

  container.appendChild(card);
});

function openModal(name) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("itemName").innerText = name;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
