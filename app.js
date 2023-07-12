'use strict'

let colorButton = document.getElementById('changeColor');
let screen = document.getElementById('screen');
colorButton.addEventListener('click', function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

});