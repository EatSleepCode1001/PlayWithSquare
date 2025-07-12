function moveSquare(position, color) {
    const square = document.getElementById('square1');
    let top, left, translateX = '-50%', translateY = '-50%';
    switch(position) {
        case 'topRight':
            top = '10%'; left = '90%'; translateX = '-100%'; translateY = '0'; break;
        case 'topLeft':
            top = '10%'; left = '10%'; translateX = '0'; translateY = '0'; break;
        case 'topCenter':
            top = '10%'; left = '50%'; translateX = '-50%'; translateY = '0'; break;
        case 'center':
            top = '50%'; left = '50%'; translateX = '-50%'; translateY = '-50%'; break;
        case 'bottomCenter':
            top = '90%'; left = '50%'; translateX = '-50%'; translateY = '-100%'; break;
        case 'bottomLeft':
            top = '90%'; left = '10%'; translateX = '0'; translateY = '-100%'; break;
        case 'bottomRight':
            top = '90%'; left = '90%'; translateX = '-100%'; translateY = '-100%'; break;
        default:
            top = '50%'; left = '50%'; translateX = '-50%'; translateY = '-50%';
    }
    square.style.top = top;
    square.style.left = left;
    square.style.transform = `translate(${translateX}, ${translateY})`;
    square.style.background = color;
}

function topRight() { moveSquare('topRight', 'violet'); }
function topLeft() { moveSquare('topLeft', 'indigo'); }
function topCenter() { moveSquare('topCenter', 'blue'); }
function center() { moveSquare('center', 'green'); }
function bottomCenter() { moveSquare('bottomCenter', 'yellow'); }
function bottomLeft() { moveSquare('bottomLeft', 'orange'); }
function bottomRight() { moveSquare('bottomRight', 'red'); }

window.onload = function() { center(); };
