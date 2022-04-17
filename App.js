const body = document.querySelector('body');
const burgerMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');
const linkList = document.querySelector('ul');
const header = document.querySelector('.header');

burgerMenu.addEventListener('click', openMenu);

function openMenu() {
  if (navbar.style.display != 'block') {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';

  }
}

linkList.addEventListener('click', () => {
  navbar.style.display = 'none';
})

