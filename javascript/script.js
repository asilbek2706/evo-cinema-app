const menuButton = document.querySelector('.menu__icon');
const mobileMenu = document.querySelector('.mobile__menu');
const xIcon = document.querySelector('.x__icon');
const menuBackdrop = document.querySelector('.mobile__menu-backdrop');
const mobileMenuLinks = document.querySelectorAll('.mobile__menu-link');

function setMenuState(isOpen) {
  mobileMenu.classList.toggle('is-open', isOpen);
  menuBackdrop.classList.toggle('is-visible', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function showMobileMenu() {
  setMenuState(true);
}

function hideMobileMenu() {
  setMenuState(false);
}

menuButton.addEventListener('click', showMobileMenu);
xIcon.addEventListener('click', hideMobileMenu);
menuBackdrop.addEventListener('click', hideMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', hideMobileMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideMobileMenu();
  }
});
