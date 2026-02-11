async function loadProducts() {
  const token = getToken();

  const res = await fetch("/api/products", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  const data = await res.json();
  document.getElementById("admin-products").innerHTML =
    JSON.stringify(data, null, 2);
}