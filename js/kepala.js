const role = localStorage.getItem("role");

if (!role) {
  window.location.href = "index.html";
}

if (role !== "kepala") {
  alert("Akses ditolak!");
  window.location.href = "index.html";
}

function logout() {
  if (confirm("Yakin ingin logout?")) {
    location.href = "index.html";
  }
}
