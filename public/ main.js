async function loadProducts() {
  const res = await fetch("/api/products");
  const data = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">$${product.price}</div>
      <button class="btn">Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      addToCart(product);
    });

    container.appendChild(div);
  });
}

loadProducts();