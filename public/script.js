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

    container.appendChild(div);
  });
}

loadProducts();

async function loadProducts() {
    try {
        const response = await fetch("http://localhost:3000/api/products");
        const products = await response.json();

        const container = document.getElementById("productsContainer");
        container.innerHTML = "";

        products.forEach(product => {
            container.innerHTML += `
                <div class="product-card">
                    <img 
                        src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
                        class="product-image"
                    />
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-description">${product.description}</div>
                        <div class="product-price">$${product.price}</div>
                        <button class="add-btn">Add to Cart</button>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

loadProducts();