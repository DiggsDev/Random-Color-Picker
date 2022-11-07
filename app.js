const possibleHexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector(".button");
const hexValue = document.querySelector(".hexValue");

function getRandomNumber(){
    return Math.floor(Math.random() * possibleHexValues.length);
}

button.addEventListener('click', function() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += possibleHexValues[getRandomNumber()];
    }

    hexValue.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
