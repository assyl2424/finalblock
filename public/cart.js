function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().length;
  document.getElementById("cart-count").innerText = count;
}

document.addEventListener("DOMContentLoaded", updateCartCount);