"use strict";

//   Navigation opt5 - using Class constructor 

// Calling function
// function toggleMenu() {
//     console.log("script is imported and executed");

// const burgerToggle = document.querySelector('#burger');

// document.querySelector('nav-links').classList.toggle('toggle');
// document.querySelector('nav-links').classList.toggle('nav-links_active')
let toggleMenu = class burgerToggle {
    constructor(show) {
        this.show = show;
    }
};

console.log(toggleMenu);




// }
export { toggleMenu };
