function login() {
  const role = document.getElementById("role").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (role === "pengurus" && pass === "123") {
    localStorage.setItem("role", "pengurus");
    localStorage.setItem("username", user); // SIMPAN NAMA LOGIN
    window.location.href = "pengurus.html";
  }
  else if (role === "kepala" && user === "kepala" && pass === "123") {
    localStorage.setItem("role", "kepala");
    localStorage.setItem("username", user);
    window.location.href = "kepala.html";
  }
  else {
    alert("Login gagal!");
  }
}
