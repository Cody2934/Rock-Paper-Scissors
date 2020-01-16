//need imports
import { getRandomThrow, getThrowFromNumber, checkResult } from './throwfunction.js';

const button = document.getElementById('submit-button');
const resultDisplay = document.getElementById('result-display');
const resultTally = document.getElementById('result-tally');
const drawsDisplay = document.getElementById('draws');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');

let draws = 0;
let wins = 0;
let losses = 0;


button.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const resultTally = checkResult(userChoice, computerChoice);
    
    if (resultTally === 'win') {
        wins ++;
        winsDisplay.textContent = wins;
        resultDisplay.textContent = 'You win!';
    } else if (resultTally === 'lose') {
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.textContent = 'You lose!';
    } else {
        draws++;
        drawsDisplay.textContent = draws;
        resultDisplay.textContent = 'Draw!';
    }
});
