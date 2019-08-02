const container = document.querySelector(".container");

const topBar = document.createElement("div");
topBar.classList.add("top");
topBar.style.borderTopLeftRadius = "25px";
topBar.style.borderTopRightRadius = "25px";
topBar.style.backgroundColor = "red";
topBar.style.padding="0.5%";

container.appendChild(topBar);

const left = document.createElement("div");
left.classList.add("left");
left.style.backgroundColor = "red";
left.style.padding="0.5%";

container.appendChild(left);

// code for expanding div

const right = document.createElement("div");
right.classList.add("right");
right.style.backgroundColor = "red";
right.style.padding="0.5%";

container.appendChild(right);


const bottomBar = document.createElement("div");
bottomBar.classList.add("bottom");
bottomBar.style.borderBottomLeftRadius = "25px";
bottomBar.style.borderBottomRightRadius = "25px";
bottomBar.style.backgroundColor = "red";
bottomBar.style.padding="0.5%";

container.appendChild(bottomBar);
