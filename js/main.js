// Sticky Navbar

let headTopHeight = document.querySelector('header .top--side').clientHeight;
let headMidHeight = document.querySelector('header .mid--side').clientHeight;

let headerHeight = headTopHeight + headMidHeight;

let navbar = document.querySelector('header .navbar');

window.onscroll = function() {
    if (window.outerWidth >= 850) {
        window.scrollY > headerHeight
            ? navbar.classList.add('sticky')
            : navbar.classList.remove('sticky')
    }
}

// End of Sticky Navbar

// Loader Screen

let loader = document.querySelector('.loader-screen');

window.onload = function() {
    loader.classList.add('hidden');
}

// End of Loader Screen