//change src in <img class="menu-open" src="images/group.svg"> to
//"images/shape.svg"

//nav full blauw

const hamburgerIcon = document.querySelector('.menu-open');
const navContainer = document.querySelector('nav');
const navItems = document.querySelector('.nav-items');

 
hamburgerIcon.addEventListener('click',  function() {
    if (navContainer.classList.contains("toggle")) {
        navContainer.classList.remove("toggle");
        navItems.classList.remove("toggle");

    } else {
        navContainer.classList.add("toggle");
        navItems.classList.add("toggle");
        console.log(navContainer.classList.contains("toggle"));
    }
    
})
