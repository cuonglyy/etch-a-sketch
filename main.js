const gridContainer = document.querySelector("#grid-container");


// Use inline style to create css grids
let makeGrid = (gridNum) => {

  //Creates rows and columns of gridNum
  gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;

  //Append grid elements into the container n^2 times
  for (let i = 0; i < gridNum * gridNum; i++) {
    //Create grid element and add class attribute named "grid-item"
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid-item")
    gridContainer.appendChild(grid);

  }

}

makeGrid(16);
