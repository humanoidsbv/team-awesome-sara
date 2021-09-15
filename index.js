const navContainer = document.querySelector('nav');
const navMenu = document.querySelector('.navigation__menu');
const navBtn = document.querySelector(".header__button");

navBtn.addEventListener('click', () => {
    toggleClassName(navBtn);
    toggleClassName(navContainer);
    toggleClassName(navMenu);
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        removeClassName(navBtn);
        removeClassName(navContainer);
        removeClassName(navMenu);
    } 
  });

function toggleClassName(element) {
    element.classList.toggle("active");
}

function removeClassName(element) {
    element.classList.remove("active");
}
