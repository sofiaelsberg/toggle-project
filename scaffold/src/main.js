"use strict";


// Import JS partials
// import { toggleMenu } from './partials/navigation_1.js';
// import { toggleMenu } from './partials/navigation_2.js';
// // import { toggleMenu } from './partials/navigation_3.js';
// import { toggleMenu } from './partials/navigation_4.js';
import { toggleMenu } from './partials/navigation_5.js';


// Js waits to run until after DOM is loaded
document.addEventListener("DOMContentLoaded", ready);


function ready() {
    console.log('DOM is ready');
    toggleMenu();
}
