const container = document.querySelector(".grid");

function makeGrid() {
	for (i = 1; i <= 16; i++) {
		for (j = 1; j <= 16; j++) {
			const row = document.createElement("div");
			row.classList.add("square")
			container.appendChild(row);
		}
	}
}

makeGrid();

const squares = document.getElementsByClassName("square")

for (let square of squares) {
	square.addEventListener(
				"mouseover",
				(event) => {
					event.target.style.background = "orange";
				}
			)
}
