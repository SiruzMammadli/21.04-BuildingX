// Sticky Navbar

let headTopHeight = document.querySelector('header .top--side').clientHeight;
let headMidHeight = document.querySelector('header .mid--side').clientHeight;

let headerHeight = headTopHeight + headMidHeight;

let navbar = document.querySelector('header .navbar')

window.onscroll = function() {
    window.scrollY > headerHeight
        ? navbar.classList.add('sticky')
        : navbar.classList.remove('sticky')
}

// End of Sticky Navbar

