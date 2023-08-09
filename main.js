const container = document.querySelector(".container");

function makeGrid() {
	for (i = 1; i <= 16; i++) {
		for (j = 1; j <= 16; j++) {
			const row = document.createElement("div");
			container.appendChild(row);
		}
	}
}

makeGrid();

container.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.background = "orange";
	}
)
