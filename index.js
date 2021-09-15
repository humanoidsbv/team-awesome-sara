const navContainer = document.querySelector('nav');
const navMenu = document.querySelector('.navigation__menu');
const hamburgerMenuBtn = document.querySelector(".header__button");

hamburgerMenuBtn.addEventListener('click', () => {
    openCloseNav()
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        closeMobileNav()
    } 
});

function openCloseNav() {
    toggleActiveState(hamburgerMenuBtn);    //change hamburger menu icon into a cross icon
    toggleActiveState(navContainer);        //resizes nav container to a full page
    toggleActiveState(navMenu);             //opens the list of navigation items
}

function closeMobileNav() {
    removeActiveState(hamburgerMenuBtn);
    removeActiveState(navContainer);
    removeActiveState(navMenu);
}

function toggleActiveState(element) {
    element.classList.toggle("active");
}

function removeActiveState(element) {
    element.classList.remove("active");
}
