"use strict";


// Import JS partials
import { toggleMenu } from './partials/navigation.js';


// Js waits to run until after DOM is loaded
document.addEventListener("DOMContentLoaded", ready);


function ready() {
    console.log('DOM is ready');
    toggleMenu();
}
