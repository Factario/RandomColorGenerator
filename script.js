const generateButton = document.getElementById("generate-button");

var css = document.querySelector("h3");
var body = document.getElementById("gradient");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var buttomColor = document.querySelector("#generate-button") 


function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
    
color2.addEventListener("input", setGradient);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

generateButton.addEventListener("click", function() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    buttomColor = getRandomColor();
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    css.textContent = body.style.background + ";";
    generateButton.style.backgroundColor = getRandomColor();
    generateButton.style.borderColor = getRandomColor();
});

