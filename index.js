window.alert("Atenção, voce tem apenas 10 tentaivas");

let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;

function newGame() {
    window.location.reload();
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
}

function compareNumbers() {
    const userNumber = Number(document.getElementById("inputBox").value);
    userNumbers.push(" " + userNumber);
    document.getElementById("guesses").innerHTML = userNumbers;

    if (attempts < maxGuesses) {
        if (userNumber > computerNumber) {
            document.getElementById("textOutput").innerHTML = "Número muito alto";
            document.getElementById("inputBox").value = " ";
            attempts++;
            document.getElementById("attempts").innerHTML = attempts;
        } else if (userNumber < computerNumber) {
            document.getElementById("textOutput").innerHTML = "Número abaixo";
            document.getElementById("inputBox").value = " ";
            attempts++;
            document.getElementById("attempts").innerHTML = attempts;
        } else {
            document.getElementById("textOutput").innerHTML = "Acertou";
            attempts++;
            document.getElementById("attempts").innerHTML = attempts;
            document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
        }
    } else {
        document.getElementById("textOutput").innerHTML =
            "Voce perdeu o número era " + computerNumber;
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
    }
}