//change src in <img class="menu-open" src="images/group.svg"> to
//"

//nav full blauw

const hamburgerIcon = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('nav');
const navItems = document.querySelector('.nav-items');



hamburgerIcon.addEventListener('click',  function() {
    if (navContainer.classList.contains("toggle")) {
        hamburgerIcon.src="images/group.svg";
        navContainer.classList.remove("toggle");
        navItems.classList.remove("toggle");

    } else {
        hamburgerIcon.src="images/shape.svg";
        navContainer.classList.add("toggle");
        navItems.classList.add("toggle");
        navContainer.classList.contains("toggle");
    }
})
