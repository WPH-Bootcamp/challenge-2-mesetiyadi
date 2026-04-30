const hamburgerBtn = document.querySelector('.hamburger-button');
const menu = document.querySelector('.menu');
const btnContainer = document.querySelector('.btn-container');
hamburgerBtn.addEventListener('click', function () {
  hamburgerBtn.classList.toggle('open');
  btnContainer.classList.toggle('open');
  menu.classList.toggle('open');
});

document.addEventListener('click', function (event) {
  const isHeader = event.target.closest('header');
  const isNavMenu = event.target.closest('.nav-menu');
  const isContactUsBtn = event.target.closest('.contact-us-btn');
  console.log(event.target);
  if (!isHeader || isNavMenu || isContactUsBtn) {
    btnContainer.classList.remove('open');
    menu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
  }
});

let resizeTimeout;

window.addEventListener('resize', function () {
  document.documentElement.classList.add('no-transition');

  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    document.documentElement.classList.remove('no-transition');
  }, 50);
});
