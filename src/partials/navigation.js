"use strict";

function toggleMenu() {
    console.log("script is imported and executed");


    // Navigation opt1  - using nullcheck

    // const navLinks = document.querySelector('.nav-links');
    // const burgerToggle = document.querySelector('#burger');

    // burgerToggle.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     if (window.getComputedStyle(navLinks).display === 'flex') {
    //         navLinks.style.display = 'none';
    //     } else {
    //         navLinks.style.display = 'flex';
    //         burgerToggle.style.color = 'black';
    //     }
    // });


    // Navigation opt2 - using eventlistener click and toggle classList

    // const burgerToggle = document.querySelector('#burger');
    // const navLinks = document.querySelector('.nav-links');

    // // Checks for visibility and adds classes accordingly

    // burgerToggle.addEventListener('click', () => {
    //     navLinks.classList.toggle('show');
    //     burgerToggle.classList.toggle('burger-open');
    // })

    // Navigation opt3 - using onclick instead og evenlistener

    // const burgerToggle = document.querySelector('#burger, #xicon');
    // // const changeIcon = document.querySelector('#xicon');
    // const navLinks = document.querySelector('.nav-links');

    // burgerToggle.onclick = function () {
    //     navLinks.classList.toggle('active');
    //     burgerToggle.classList.toggle('burger-open');
    //     // burgerToggle.classList.toggle('hide-burger');
    //     // changeIcon.classList.toggle('show-x');
    // }


    //   Navigation opt4 - using eventlisteners and inline styling.... - works but very fucking ugly piece of code and unnecessary complicated

    const navLinks = document.querySelector('.nav-links');
    const burgerToggle = document.querySelector('#burger');
    const changeIcon = document.querySelector('#xicon');


    burgerToggle.addEventListener('click', show);
    changeIcon.addEventListener('click', close);

    function show() {
        navLinks.style.display = 'flex';
        burgerToggle.style.color = 'black';
        burgerToggle.classList.toggle('hide-burger');
        changeIcon.classList.toggle('show-x');
    }

    function close() {
        navLinks.style.display = 'none';
        burgerToggle.style.color = 'white';
        burgerToggle.classList.toggle('hide-burger');
        changeIcon.classList.toggle('show-x');
    }
}
export { toggleMenu };
