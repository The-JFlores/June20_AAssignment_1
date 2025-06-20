// ======= Menú hamburguesa / Hamburger Menu =======
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Al hacer clic en el botón, muestra u oculta el menú / Toggle menu on button click
menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('show');
});