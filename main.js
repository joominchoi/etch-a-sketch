const grid = document.querySelector(".grid");

numberPerSide = 100

grid.style.gridTemplateColumns = `repeat(${numberPerSide}, auto)`;

function makeGrid() {
	for (i = 1; i <= numberPerSide; i++) {
		for (j = 1; j <= numberPerSide; j++) {
			const row = document.createElement("div");
			row.classList.add("square");
			grid.appendChild(row);

		}
	}
}

function makeSquare(){
  var elements = document.getElementsByClassName('square');
  Array.from(elements).forEach(function(element) {
      element.style.height = '1px';
      element.style.width = '1px';
  });
}

makeGrid();
makeSquare();

const squares = document.getElementsByClassName("square")

for (let square of squares) {
	square.addEventListener(
		"mouseover",
		(event) => {
			event.target.style.background = "orange";
		}
	)
}
