const container = document.querySelector('#container');
 //16x16 grid of div elements
 //
function makeGrid(rows,cols){
  for(let c = 0; c < rows*cols; c++){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    let cell = document.createElement('div');
    //cell.textContent = (c+1);
    cell.classList.add('colorChange');
    cell.classList.add('grid-item');
    container.appendChild(cell);
  }
}

makeGrid(10,10);

function backgroundChange(e){
  e.style.backgroundColor = "red";

}

const colors = document.querySelectorAll('.colorChange');
colors.forEach((colorChange) => {
  colorChange.addEventListener('mouseenter', function(e) {
    backgroundChange(e.target);
});
});
