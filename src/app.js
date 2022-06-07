const instruction = document.getElementById("instruction");
const start_btn = document.getElementById("start");
const gameboard = document.getElementById("gameboard");
const gameMessage = document.getElementById("gameMessage");
var isGreen = false;

start_btn.addEventListener("click", () => {
    instruction.style.display = "none";
    gameMessage.style.visibility = "visible";
    gameboard.style.display = "block";
    gameStart();
});

function gameStart() {
    var randomTime = getRandomFloat(2, 5, 2);
    setTimeout(turnGreen, randomTime * 1000);

}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
}

var start;
function turnGreen() {
    gameboard.style.backgroundColor = 'green';
    start = Date.now();
    isGreen = true;
}

gameboard.addEventListener("click", () => {
    if(!isGreen) {
        return;
    }

    var delta = Date.now() - start;
    var result = delta / 1000;

    displayResult(result);

});

function displayResult(result) {
    var msg;
    if (result > 0.273) {
        msg = "Your result : " + result + "\n You were slower than the average user. \n Try again?";
    } else {
        msg = "Your result : " + result + "\n You were faster than the average user. \n Try again?";
    }

    if (confirm(msg)) {
        reset();
    } else {
        window.close();
    }
}

function reset() {
    isGreen = false;
    gameboard.style.backgroundColor = 'white';
    gameStart();
}