"use strict";

// Js waits to run until after DOM is loaded
document.addEventListener("DOMContentLoaded", ready);

function ready() {
    alert('DOM is ready');
}

// Import JS files to main
function test(include) {
    let navigation = include('../js/partials/navigation.js');
}
test();

// import `./js/partials/navigation.js`;

// function include(import ) {
//     import `./js/partials/navigation.js`;
// }
