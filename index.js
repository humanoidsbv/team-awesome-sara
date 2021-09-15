const navContainer = document.querySelector('nav');
const navItems = document.querySelector('.nav-items');
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener('click', () => {
    toggleClassName(navBtn);
    toggleClassName(navContainer);
    toggleClassName(navItems);
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        removeClassName(navBtn);
        removeClassName(navContainer);
        removeClassName(navItems);
    } 
  });

function toggleClassName(element) {
    element.classList.toggle("active");
}

function removeClassName(element) {
    element.classList.remove("active");
}
