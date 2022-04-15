const DEFAULT_COLOR = "#000000";
const DEFAULT_GRID = 16;
const DEFAULT_MODE = "color";

let currentSize = DEFAULT_GRID;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

const colorBtn = document.querySelector("#color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridContainer = document.querySelector("#grid-container");
const sizeSlider = document.querySelector(".slider");
const sizeValue = document.querySelector(".size-value");
const sliderContainer = document.querySelector(".slider-container");
const colorPicker = document.querySelector("#color-picker");

let setSize = (newSize) => {
  currentSize = newSize;
}

let setColor = (newColor) => {
  currentColor = newColor;
}

let setMode = (newMode) => {
  currentMode = newMode;
}


let changeColor = (e) => {
  if (currentMode === 'color'){
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'rainbow') {
    const rgb1 = Math.floor(Math.random() * 256);
    const rgb2 = Math.floor(Math.random() * 256);
    const rgb3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = "rgb(" + rgb1 + "," + rgb2 + "," + rgb3+ ")";
  }
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

// For color picker
let pickColor = (e) => {
  setColor(e.target.value);
}

// This is to set the mode for rainbow or color
let modeSelection = (e) => {
  setMode(e.target.value);
  if (e.target.value === 'color') {
    colorBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
  } else if (e.target.value === 'rainbow') {
    rainbowBtn.classList.add("active");
    colorBtn.classList.remove("active");
  }
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

colorBtn.addEventListener("click", modeSelection);
rainbowBtn.addEventListener("click", modeSelection);
clearBtn.addEventListener("click", reloadGrid);
sizeSlider.addEventListener("input", changeGrid);
sizeSlider.addEventListener("mouseup", reloadGrid);
colorPicker.addEventListener("input", pickColor);

window.onload = () => {
  makeGrid(DEFAULT_GRID);
}