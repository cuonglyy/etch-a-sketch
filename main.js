const DEFAULT_COLOR = "#000000";
const DEFAULT_GRID = 16;

let currentSize = DEFAULT_GRID;
let currentColor = DEFAULT_COLOR;

const colorBtn = document.querySelector("#color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridContainer = document.querySelector("#grid-container");
const sizeSlider = document.querySelector(".slider");
const sizeValue = document.querySelector(".size-value");
const sliderContainer = document.querySelector(".slider-container");

let setSize = (newSize) => {
  currentSize = newSize;
}

let setColor = (newColor) => {
  currentColor = newColor;
}

let changeColor = (e) => {
  e.target.style.backgroundColor = currentColor;
}

let updateSizeValue = (value) => {
  sizeValue.textContent = value + " x " + value;

  //This is to have the background color change with the slider thumb
  sizeSlider.style.background = "linear-gradient(90deg, rgb(45, 45, 45)" + value + "%, rgb(255, 255, 255)" + value + "%)";
}

// Removes all elements inside grid container
let clearGrid = () => {
  gridContainer.innerHTML = '';
}

let reloadGrid = () => {
  clearGrid();
  makeGrid(currentSize);
}

let changeGrid = (e) => {
  updateSizeValue(e.target.value);
  setSize(e.target.value);
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
    gridElement.addEventListener("mouseenter", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

clearBtn.addEventListener("click", reloadGrid);
sizeSlider.addEventListener("input", changeGrid);
sizeSlider.addEventListener("mouseup", reloadGrid);

window.onload = () => {
  makeGrid(DEFAULT_GRID);
}