// ========== DASHBOARD KEPALA JAVASCRIPT ==========

// Fungsi untuk memuat statistik dashboard
function loadDashboardStats() {
  // Ambil data dari localStorage (contoh, sesuaikan dengan struktur data Anda)
  const pengurusList = JSON.parse(localStorage.getItem('pengurusList')) || [];
  const absensiHariIni = JSON.parse(localStorage.getItem('absensiHariIni')) || [];
  const jadwalList = JSON.parse(localStorage.getItem('jadwalList')) || [];
  
  // Hitung statistik
  const totalPengurus = pengurusList.length;
  const hadirHariIni = absensiHariIni.filter(item => item.status === 'hadir').length;
  const totalJadwal = jadwalList.length;
  
  // Update tampilan (pastikan elemen dengan ID ini ada di HTML)
  const totalPengurusEl = document.getElementById('totalPengurus');
  const hadirHariIniEl = document.getElementById('hadirHariIni');
  const totalJadwalEl = document.getElementById('totalJadwal');
  
  if (totalPengurusEl) totalPengurusEl.textContent = totalPengurus;
  if (hadirHariIniEl) hadirHariIniEl.textContent = hadirHariIni;
  if (totalJadwalEl) totalJadwalEl.textContent = totalJadwal;
}

// Fungsi untuk update jam real-time (LENGKAP DENGAN DETIK)
function updateClock() {
  const now = new Date();
  
  // Format tanggal Indonesia
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const dateStr = now.toLocaleDateString('id-ID', options);
  
  // Format waktu dengan detik
  const timeStr = now.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'  // Tambah detik biar hidup
  });
  
  // Update elemen
  const dateDayEl = document.querySelector('.date-day');
  const dateTimeEl = document.querySelector('.date-time');
  
  if (dateDayEl) dateDayEl.textContent = dateStr;
  if (dateTimeEl) dateTimeEl.textContent = timeStr + ' WIB';
}

// Fungsi logout
function logout() {
  if (confirm('Apakah Anda yakin ingin logout?')) {
    // Hapus session/login status
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    
    // Redirect ke halaman login
    window.location.href = 'index.html';
  }
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Panggil fungsi statistik
  loadDashboardStats();
  
  // Panggil fungsi jam pertama kali
  updateClock();
  
  // Update jam setiap detik
  setInterval(updateClock, 1000);
  
  // Optional: Tampilkan sapaan berdasarkan waktu
  showGreeting();
});

// Fungsi tambahan: sapaan berdasarkan waktu (optional)
function showGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = '';
  
  if (hour >= 3 && hour < 11) {
    greeting = 'Selamat Pagi';
  } else if (hour >= 11 && hour < 15) {
    greeting = 'Selamat Siang';
  } else if (hour >= 15 && hour < 18) {
    greeting = 'Selamat Sore';
  } else {
    greeting = 'Selamat Malam';
  }
  
  // Update sapaan di welcome text (jika ada)
  const welcomeEl = document.querySelector('.welcome-text h2');
  if (welcomeEl) {
    welcomeEl.innerHTML = `${greeting}, Kepala!`;
  }
}