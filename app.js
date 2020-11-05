'use strict';

function search() {
    // get variables
    let input = document.getElementById('myInput');
    let filter = input.value.toUpperCase();
    let tables = document.getElementsByTagName('table');

    for(let i = 0; i < row.length; i++) {
        if (tables[i].id !== filter) {
            tables[i].style.display = 'none';
        };
    }
};