"use strict";

function toggleMenu() {
    console.log("script is imported and executed");


    // Navigation opt1

    // const navLinks = document.querySelector('.nav-links');
    // const burgerToggle = document.querySelector('#burger');


    // openMenu.addEventListener('click', show);
    // openMenu.addEventListener('click', close);

    // function show() {
    //     navLinks.style.display = 'flex';
    //     burgerToggle.style.color = 'black';
    // }

    // function close() {
    //     navLinks.style.display = 'none';
    // }



    // Navigation opt2  - using nullcheck - cannot close

    // const navLinks = document.querySelector('.nav-links');
    // const burgerToggle = document.querySelector('#burger');

    // burgerToggle.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     if (window.getComputedStyle(navLinks).display === 'block') {
    //         navLinks.style.display = 'none';
    //     } else {
    //         navLinks.style.display = 'flex';
    //         burgerToggle.style.color = 'black';
    //     }
    // });


    // Navigation opt3 - using toggle

    const burgerToggle = document.querySelector('#burger');
    const navLinks = document.querySelector('.nav-links');

    // Checks for visibility and adds classes accordingly

    burgerToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        burgerToggle.classList.toggle('open-color');
    })

}
export { toggleMenu };
