const hamburgerIconOpen = document.querySelector('.hamburger-open');
const hamburgerIconClose = document.querySelector('.hamburger-close');
const navContainer = document.querySelector('nav');
const navItems = document.querySelector('.nav-items');
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener('click',  function() {
    navBtn.classList.toggle("close");
    addClassName(navContainer);
    addClassName(navItems);
})

function addClassName(element) {
    element.classList.toggle("toggle");
}
