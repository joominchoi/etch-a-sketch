const grid = document.querySelector(".grid");
const squares = document.getElementsByClassName("square")
const gridSizeButton = document.getElementById("gridSizeButton")

const gridStyle = window.getComputedStyle(grid)
const gridHeight = Number(gridStyle.getPropertyValue('height').replace('px', ''));

numberPerSide = 75
squareSize = (gridHeight - (numberPerSide * 2)) / numberPerSide

function makeGrid() {
	for (i = 1; i <= numberPerSide; i++) {
		for (j = 1; j <= numberPerSide; j++) {
			const row = document.createElement("div");
			row.classList.add("square");
			grid.appendChild(row);

		}
	}
}

function updateGridSize() {
	grid.style.gridTemplateColumns = `repeat(${numberPerSide}, auto)`;
}

function updateSquareSize(){
  Array.from(squares).forEach(function(square) {
      square.style.height = `${squareSize}px`;
      square.style.width = `${squareSize}px`;
  });
}

makeGrid();
updateGridSize();
updateSquareSize();

for (let square of squares) {
	square.addEventListener(
		"mouseover",
		(event) => {
			event.target.style.background = "orange";
		}
	)
}


      // let counter = document.getElementById("counter")
      
      // Apply the addEventListener method
      gridSizeButton.addEventListener("click", myFunc)
      
      // Defining the myFunc function
      function myFunc() {
      
         // Increase the existing value by 1      
         // Use the parseInt method to convert the existing      
         // value (which is in string format) into integer
         console.log("Hello")
      }

