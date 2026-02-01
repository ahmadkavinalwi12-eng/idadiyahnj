function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // validasi kosong
  if (username === "" || password === "") {
    alert("Username dan Password wajib diisi!");
    return;
  }

  // LOGIN KEPALA
  if (username === "kepala" && password === "123") {
    window.location.href = "kepala.html";
    return;
  }

  // LOGIN PENGURUS
  if (username === "pengurus" && password === "123") {
    window.location.href = "pengurus.html";
    return;
  }

  // JIKA SALAH
  alert("Username atau Password salah!");
}
