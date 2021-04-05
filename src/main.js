"use strict";

// Import JS partials to main
import { test1 } from './partials/navigation';


// Js waits to run until after DOM is loaded
document.addEventListener("DOMContentLoaded", ready);


function ready() {
    alert('DOM is ready');
    test1();
}
