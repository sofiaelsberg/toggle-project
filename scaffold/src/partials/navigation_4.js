"use strict";

function toggleMenu() {
    console.log("script is imported and executed");

    //   Navigation opt4 - using eventlisteners

    const navLinks = document.querySelector('.nav-links');
    const burgerToggle = document.querySelector('#burger');

    burgerToggle.addEventListener('click', show);

    function show() {
        burgerToggle.classList.toggle('toggle');
        navLinks.classList.toggle('nav-links_active')
    }
}
export { toggleMenu };
