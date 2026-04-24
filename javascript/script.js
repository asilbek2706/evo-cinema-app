const menuButton = document.querySelector('.menu__icon');
const mobileMenu = document.querySelector('.mobile__menu'),
  xIcon = document.querySelector('.x__icon');

function showMobileMenu() {
  mobileMenu.style.transform = 'translateX(0)';
}

function hideMobileMenu() {
  xIcon.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(100vw)';
  });
}

menuButton.addEventListener('click', showMobileMenu);

xIcon.addEventListener('click', hideMobileMenu);
