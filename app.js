let userButton = document.querySelector("input[name=choice]:checked");

const computerChoice = types[ Math.floor(Math.random() * (types.lengh))];

function play() => {
    let types = ['rock', 'paper', 'scissors'];
    let computerChoice = types[Math.floor(Math.random() * (types.lengh))];
    document.getElementById("choiceDisplay").innerText = computerChoice;
    let userButton = document.querySelector("input[name=choice]:checked");
    if (userButton) {
        let userChoice = userButton.value;
    } else {
        alert("You have to choose Rock, Paper, or Scissors Frist");
        return;
    }
    if (userChoice == computerChoice) {
        document.getElementById("result").textContent = "Tie";
        return;
    }
    switch (computerChoice) {
        case "rock":
            if (userChoice == "paper") {
                document.getElementById("result").textContent = "Paper cover rock, you win!";
            } else {
                document.getElementById("result") = "Rock breaks scissors, you lose!";}
            break;
        case "paper":
            if (userChoice == "scissors") {
                document.getElementById("result").textContent = "Scissors cut paper, you win!";
            } else {
                document.getElementById("result").textContent = "Paper covers rock, you lose!";
            }
            break;
        case "scissors":
            if (userChoice = "rock") {
                document.getElementById("result").textContent = "Rock breaks scissors, you win!";
            } else {
                document.getElementById("result").textContent = "Scissors cut paper, you lose!;"
            }
    }
}