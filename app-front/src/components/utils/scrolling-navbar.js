//* Scrolling NavBar

let prevScrollpos = window.pageYOffset;

const NavScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = '0';
    } else {
        document.querySelector("nav").style.top = '-150px';
    }

    prevScrollpos = currentScrollPos;
};

window.addEventListener('scroll', NavScroll);