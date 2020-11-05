'use strict';

//  Add event handler

const searchField = document.getElementById('myInput');
searchField.addEventListener('keyup', search);
const reset = document.getElementById('reset');
reset.addEventListener('click', showAll);
const hide = document.getElementById('hide');
hide.addEventListener('change', hideRows);

function search() {
    // get variables
    let input = document.getElementById('myInput');
    let filter = input.value.toLowerCase();
    let tables = document.getElementsByTagName('table');

    console.log('filter', filter)
    for(let i = 0; i < tables.length; i++) {
        let textValue = tables[i].id;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            tables[i].style.display = '';
        } else {
            tables[i].style.display = 'none';
        }
    }
};

function hideRows(e) {
    // hides all but three rows in each table for readability
    let number = parseInt(e.target.value);
    let tables = document.getElementsByTagName('table');

    showAll();
    
    for (let i = 0; i < tables.length; i++) {
        // get a count of the rows in each table
        let rows = tables[i].getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        console.log(rows);
        if(rows.length > number) {
            for(let j = number; j < rows.length; j++) {
                rows[j].style.display = 'none';
            }
        }
    }

}

function showAll() {
    console.log('hi')
    let tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        // get a count of the rows in each table
        let rows = tables[i].getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        console.log(rows);
            for(let j = 0; j < rows.length; j++) {
                rows[j].style.display = '';
                console.log(rows[j]);
            }
    }
}