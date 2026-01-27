let dataMalam = JSON.parse(localStorage.getItem("dataMalam")) || [];

function renderMalam() {
  const tbody = document.getElementById("tabelMalam");
  tbody.innerHTML = "";

  if (dataMalam.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" align="center">Belum ada data</td></tr>`;
    return;
  }

  dataMalam.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.pengurus}</td>
        <td>${item.kelompok}</td>
        <td>
          <button onclick="hapusMalam(${index})">🗑 Hapus</button>
        </td>
      </tr>
    `;
  });
}

function tambahMalam() {
  const pengurus = document.getElementById("pengurus").value;
  const kelompok = document.getElementById("kelompok").value;

  if (!pengurus || !kelompok) {
    alert("Lengkapi semua data!");
    return;
  }

  dataMalam.push({ pengurus, kelompok });
  localStorage.setItem("dataMalam", JSON.stringify(dataMalam));

  document.getElementById("pengurus").value = "";
  document.getElementById("kelompok").value = "";

  renderMalam();
}

function hapusMalam(index) {
  if (!confirm("Hapus data ini?")) return;

  dataMalam.splice(index, 1);
  localStorage.setItem("dataMalam", JSON.stringify(dataMalam));
  renderMalam();
}

renderMalam();
