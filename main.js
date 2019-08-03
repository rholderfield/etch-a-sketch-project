`use strict`;
const container = document.querySelector(".container");

const topBar = document.createElement("div");
topBar.classList.add("top");
topBar.style.borderTopLeftRadius = "25px";
topBar.style.borderTopRightRadius = "25px";
topBar.style.backgroundColor = "#af1e23";
topBar.style.textAlign = "center";
topBar.style.fontStyle = "oblique";
topBar.style.fontWeight = "bold";

const button = document.createElement("button");
button.textContent = "Clear";
topBar.appendChild(button);

button.onclick = () => clearClass();

container.appendChild(topBar);

const left = document.createElement("div");
left.classList.add("left");
left.style.backgroundColor = "#af1e23";

container.appendChild(left);

const right = document.createElement("div");
right.classList.add("right");
right.style.backgroundColor = "#af1e23";

container.appendChild(right);

const bottomBar = document.createElement("div");
bottomBar.classList.add("bottom");
bottomBar.style.borderBottomLeftRadius = "25px";
bottomBar.style.borderBottomRightRadius = "25px";
bottomBar.style.textAlign = "center";
bottomBar.style.backgroundColor = "#af1e23";
bottomBar.style.fontStyle = "oblique";
bottomBar.style.fontWeight = "bold";
bottomBar.textContent = "etch-a-sketch-ish";

container.appendChild(bottomBar);

function createGrid(gridColumnsRows = 16) {
  const middle = document.createElement("div");
  middle.classList.add("middle");
  middle.style.backgroundColor = "lightgrey";
  middle.style.gridTemplateColumns = `repeat( ${gridColumnsRows}, minmax(0.5vw, 1fr) )`;
  middle.style.gridTemplateRows = `repeat( ${gridColumnsRows}, minmax(0.5vw, 1fr) )`;

  for (
    let counter = 0;
    counter < gridColumnsRows * gridColumnsRows;
    counter++
  ) {
    const middleDivs = document.createElement("div");
    middleDivs.classList.add("middle-item");
    middle.appendChild(middleDivs);
  }

  container.appendChild(middle);

  const theMiddleDivs = document.querySelectorAll("div.middle-item");

  theMiddleDivs.forEach(theMiddleDivs => {
    theMiddleDivs.addEventListener("mouseover", () => {
      theMiddleDivs.classList.add("greyed");
    });
  });
}

function clearClass() {
  const theMiddleDivs = document.querySelectorAll("div.middle-item");

  theMiddleDivs.forEach(theMiddleDivs => {
    theMiddleDivs.classList.remove("greyed");
  });
  setGridValues();
}

function setGridValues() {
  let newGridColumnsRows;
  while (isNaN(`${newGridColumnsRows}`) || newGridColumnsRows > 80) {
    newGridColumnsRows = prompt("How many squares in next sketch? (1-80)");
    createGrid(newGridColumnsRows);
  }
  return;
}

createGrid();
