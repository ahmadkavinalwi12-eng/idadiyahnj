let dataKBM = JSON.parse(localStorage.getItem("dataKBM")) || [];

function renderKBM() {
  const tbody = document.getElementById("tabelKBM");
  tbody.innerHTML = "";

  if (dataKBM.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" align="center">Belum ada data</td></tr>`;
    return;
  }

  dataKBM.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.hari}</td>
        <td>${item.pengajar}</td>
        <td>${item.kelompok}</td>
        <td>${item.materi}</td>
        <td>
          <button onclick="hapusKBM(${index})">🗑 Hapus</button>
        </td>
      </tr>
    `;
  });
}

function tambahKBM() {
  const hari = document.getElementById("hari").value;
  const pengajar = document.getElementById("pengajar").value;
  const kelompok = document.getElementById("kelompok").value;
  const materi = document.getElementById("materi").value;

  if (!hari || !pengajar || !kelompok || !materi) {
    alert("Lengkapi semua data!");
    return;
  }

  dataKBM.push({ hari, pengajar, kelompok, materi });
  localStorage.setItem("dataKBM", JSON.stringify(dataKBM));

  document.getElementById("hari").value = "";
  document.getElementById("pengajar").value = "";
  document.getElementById("kelompok").value = "";
  document.getElementById("materi").value = "";

  renderKBM();
}

function hapusKBM(index) {
  if (!confirm("Hapus data ini?")) return;

  dataKBM.splice(index, 1);
  localStorage.setItem("dataKBM", JSON.stringify(dataKBM));
  renderKBM();
}

renderKBM();
