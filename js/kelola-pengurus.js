// cek login kepala
const role = localStorage.getItem("role");
if (role !== "kepala") {
  alert("Akses ditolak!");
  window.location.href = "index.html";
}

// ambil data dari localStorage
let pengurus = JSON.parse(localStorage.getItem("pengurus")) || [];

function tampilkanData() {
  const tbody = document.getElementById("dataPengurus");
  tbody.innerHTML = "";

  pengurus.forEach((p, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${p.nama}</td>
        <td>${p.jabatan}</td>
        <td>${p.nim}</td>
        <td>
          <button onclick="hapus(${i})">❌</button>
        </td>
      </tr>
    `;
  });
}

function tambahPengurus() {
  const nama = document.getElementById("nama").value;
  const jabatan = document.getElementById("jabatan").value;
  const nim = document.getElementById("nim").value;

  if (!nama || !jabatan || !nim) {
    alert("Lengkapi semua data!");
    return;
  }

  pengurus.push({ nama, jabatan, nim });
  localStorage.setItem("pengurus", JSON.stringify(pengurus));

  document.getElementById("nama").value = "";
  document.getElementById("jabatan").value = "";
  document.getElementById("nim").value = "";

  tampilkanData();
}

function hapus(index) {
  pengurus.splice(index, 1);
  localStorage.setItem("pengurus", JSON.stringify(pengurus));
  tampilkanData();
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html"; // kembali ke halaman login
}


// tampilkan saat halaman dibuka
tampilkanData();
