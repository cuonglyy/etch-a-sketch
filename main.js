const DEFAULT_COLOR = "#000000";
const DEFAULT_GRID = 16;

const currentGrid = DEFAULT_GRID;
const currentColor = DEFAULT_COLOR;

const clearBtn = document.querySelector("#clear-btn");
const gridContainer = document.querySelector("#grid-container");

let changeGrid = (newGrid) => {
  currentGrid = newGrid;
}

let changeColor = (newColor) => {
  currentColor = newColor;
}

let addColor = (e) => {
  e.target.style.backgroundColor = currentColor;
}

// Removes all elements inside grid container and remakes the grid in new size
let newGrid = () => {
  gridContainer.innerHTML = '';
  makeGrid(currentGrid);
}

// Use inline style to create css grids
let makeGrid = (gridNum) => {

  //Creates rows and columns of gridNum
  gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;

  //Append grid elements into the container n^2 times
  for (let i = 0; i < gridNum * gridNum; i++) {
    //Create grid element and add class attribute named "grid-item"
    const gridElement = document.createElement("div");
    gridElement.setAttribute("class", "grid-item")
    gridElement.addEventListener("mouseenter", addColor);
    gridContainer.appendChild(gridElement);
  }
}

clearBtn.addEventListener("click", newGrid);

window.onload = () => {
  makeGrid(DEFAULT_GRID);
}