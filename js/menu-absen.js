document.addEventListener("DOMContentLoaded", () => {
  // ambil pengurus
  let pengurus = JSON.parse(localStorage.getItem("pengurus")) || [];
  let selectPengurus = document.getElementById("namaPengurus");

  pengurus.forEach(p => {
    let option = document.createElement("option");
    option.value = p.nama;
    option.textContent = `${p.nama} (${p.jabatan})`;
    selectPengurus.appendChild(option);
  });

  tampilAbsen();
});

// ==========================
// TAMBAH ABSEN
// ==========================
function tambahAbsen() {
  let nama = document.getElementById("namaPengurus").value;
  let jadwal = document.getElementById("jadwal").value;
  let status = document.getElementById("status").value;
  let ket = document.getElementById("keterangan").value;

  if (nama === "") {
    alert("Pilih pengurus!");
    return;
  }

  let dataAbsen = JSON.parse(localStorage.getItem("dataAbsen")) || [];

  dataAbsen.push({
    tanggal: new Date().toLocaleDateString("id-ID"),
    nama,
    jadwal,
    status,
    keterangan: ket
  });

  localStorage.setItem("dataAbsen", JSON.stringify(dataAbsen));

  document.getElementById("keterangan").value = "";
  tampilAbsen();
}

// ==========================
// TAMPIL ABSEN
// ==========================
function tampilAbsen() {
  let dataAbsen = JSON.parse(localStorage.getItem("dataAbsen")) || [];
  let tbody = document.getElementById("tabelAbsen");
  tbody.innerHTML = "";

  dataAbsen.forEach(a => {
    tbody.innerHTML += `
      <tr>
        <td>${a.tanggal}</td>
        <td>${a.nama}</td>
        <td>${a.jadwal}</td>
        <td>${a.status}</td>
        <td>${a.keterangan || "-"}</td>
        <td>
          <button onclick="hapusAbsen('${a.tanggal}', '${a.nama}')">Hapus</button>
        </td>
      </tr>
    `;
  });
}
function hapusAbsen(index) {
  let dataAbsen = JSON.parse(localStorage.getItem("dataAbsen")) || [];

  if (!confirm("Yakin mau hapus data absen ini?")) return;

  dataAbsen.splice(index, 1);
  localStorage.setItem("dataAbsen", JSON.stringify(dataAbsen));

  tampilAbsen();
}

