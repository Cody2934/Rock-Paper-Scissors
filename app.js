//need imports

const resultDisplay = document.getElementById('result-display');
const button = document.getElementById('submit-button');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');

let wins = 0;
let losses = 0;
let draws = 0;

console.log('buiscuts');

button.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);
  
    if (result === 'win') {
        wins ++;
        winsDisplay.textContent = wins;
        resultDisplay.textContent = 'You win!';
    } else if (result === 'lose') {
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.textContent = 'You lose!';
    } else {
        draws++;
        drawsDisplay.textContent = draws;
        resultDisplay.textContent = 'Draw!';
    }
});
