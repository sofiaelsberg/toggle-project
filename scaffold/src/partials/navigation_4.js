"use strict";

function toggleMenu() {
    console.log("script is imported and executed");

    //   Navigation opt4 - using eventlisteners and inline styling.... - works but very fucking ugly piece of code and unnecessary complicated

    const navLinks = document.querySelector('.nav-links');
    const burgerToggle = document.querySelector('#burger');

    burgerToggle.addEventListener('click', show);

    function show() {
        burgerToggle.classList.toggle('toggle');
        navLinks.classList.toggle('nav-links_active')
    }

    function close() {
        navLinks.classList.toggle('nav-links_closed')
    }
}
export { toggleMenu };
