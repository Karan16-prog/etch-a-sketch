const container = document.querySelector('.container');
const containerDad = document.querySelector('.container2');

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
makeGrid(16,16);

function backgroundChange(e){
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;


}

function fillGrid(){
const colors = document.querySelectorAll('.colorChange');
colors.forEach((colorChange) => {
  colorChange.addEventListener('mouseenter', function(e) {
    backgroundChange(e.target);
});
});
}

fillGrid();

function resetGrid(){
  let x = document.getElementsByClassName("colorChange");
  for(let i = 0; i<x.length;i++){
  x[i].style.backgroundColor = "white";
}
}


const reset = document.querySelector('.resetButton');
reset.addEventListener('click', () => {
  resetGrid();
});

function clearGrid() {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((e1) => {
    container.removeChild(e1);
  });
}

function resizeGrid(){
  var number = prompt("Please enter a number");
  let newCell = document.querySelector('body');
  clearGrid();
  makeGrid(number,number);
  fillGrid();

}


const resize = document.querySelector('.gridSize');
resize.addEventListener('click', () => {
  resizeGrid();
});
