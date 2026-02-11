const API_URL = "http://localhost:3000/api";

function saveToken(token) {
  localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

function updateNav() {
  const token = getToken();
  if (token) {
    document.getElementById("login-link").style.display = "none";
    document.getElementById("register-link").style.display = "none";
    document.getElementById("profile-link").style.display = "inline";
    document.getElementById("logout-link").style.display = "inline";
  }
}

document.addEventListener("DOMContentLoaded", updateNav);