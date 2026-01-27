let dataPego = JSON.parse(localStorage.getItem("dataPego")) || [];

function renderPego() {
  const tbody = document.getElementById("tabelPego");
  tbody.innerHTML = "";

  if (dataPego.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" align="center">Belum ada data</td></tr>`;
    return;
  }

  dataPego.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.hari}</td>
        <td>${item.kelompok}</td>
        <td>${item.pengajar}</td>
        <td>${item.badal}</td>
        <td>
          <button onclick="hapusPego(${index})">🗑 Hapus</button>
        </td>
      </tr>
    `;
  });
}

function tambahPego() {
  const hari = document.getElementById("hari").value;
  const kelompok = document.getElementById("kelompok").value;
  const pengajar = document.getElementById("pengajar").value;
  const badal = document.getElementById("badal").value;

  if (!hari || !kelompok || !pengajar || !badal) {
    alert("Lengkapi semua data!");
    return;
  }

  dataPego.push({ hari, kelompok, pengajar, badal });
  localStorage.setItem("dataPego", JSON.stringify(dataPego));

  document.getElementById("hari").value = "";
  document.getElementById("kelompok").value = "";
  document.getElementById("pengajar").value = "";
  document.getElementById("badal").value = "";

  renderPego();
}

function hapusPego(index) {
  if (!confirm("Hapus data ini?")) return;

  dataPego.splice(index, 1);
  localStorage.setItem("dataPego", JSON.stringify(dataPego));
  renderPego();
}

renderPego();
