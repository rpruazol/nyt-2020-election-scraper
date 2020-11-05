'use strict';

function search() {
    // get variables
    let input = document.getElementById('myInput');
    let filter = input.value.toLowerCase();
    let tables = document.getElementsByTagName('table');

    for(let i = 0; i < tables.length; i++) {
        if (tables[i].id !== filter) {
            tables[i].style.display = 'none';
        };
    }
};