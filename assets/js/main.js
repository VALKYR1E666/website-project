// Inisialisasi AOS
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Dropdown Menu Hamburger
  const menuButton = document.getElementById('menuButton');
  const menuDropdown = document.getElementById('menuDropdown');
  
  menuButton.addEventListener('click', () => {
    menuDropdown.classList.toggle('hidden');
  });
  
  // Optional: Tutup dropdown kalau klik di luar
  window.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !menuDropdown.contains(e.target)) {
      menuDropdown.classList.add('hidden');
    }
  });
  