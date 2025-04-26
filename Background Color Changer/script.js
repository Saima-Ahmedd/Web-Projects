const button = document.querySelectorAll('.box');
const body = document.querySelector('body');
const buttonWhite = document.querySelector('#white');

button.forEach(function(box) {
    box.addEventListener('click', function(color) {
        if (color.target.id === 'b1') {
            body.style.backgroundColor = "#547792";
        }
        if (color.target.id === 'b2') {
            body.style.backgroundColor = "#67AE6E";
        }
        if (color.target.id === 'b3') {
            body.style.backgroundColor = "#ADB2D4";
        }
        if (color.target.id === 'b4') {
            body.style.backgroundColor = "#E69DB8";
        }
        if (color.target.id === 'b5') {
            body.style.backgroundColor = "#F4F8D3";
        }
    });
});

buttonWhite.addEventListener('click', function() 
{
    body.style.backgroundColor = "white";
});
