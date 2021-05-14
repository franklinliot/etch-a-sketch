//query selectors
const container = document.querySelector('#container');

//Function that creates GRID
function addDivs(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
      let square = document.createElement("div");
      square.classList.add('grid-item');
      container.appendChild(square);
    }
  hoverColor();
}

//function that creates a random color
let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function that changes div color uponed being hovered
function hoverColor() {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `${randomColor()}`;
    });
  });
}

//grid creation
addDivs(16, 16);