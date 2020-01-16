//need imports
import { getRandomThrow, checkResult } from './throwfunction.js';

const button = document.getElementById('submit-button');
const resultDisplay = document.getElementById('result-display');
const drawsDisplay = document.getElementById('draws');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const haha = document.getElementById('haha');
const booya = document.getElementById('booya');
const again = document.getElementById('again');


let draws = 0;
let wins = 0;
let losses = 0;


button.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);
    
    if (computer === 'rock') return booya.classList.remove('hidden');


    if (result === 'win') {
        wins ++;
        winsDisplay.textContent = wins;
        resultDisplay.textContent = 'Good Throw! You win!';
        booya.classList.remove('hidden');
        haha.classList.add('hidden');
        again.classList.add('hidden');
    } else if (result === 'lose') {
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.textContent = 'You lose! Try Again!';
        haha.classList.remove('hidden');
        booya.classList.add('hidden');
        again.classList.add('hidden');
    } else {
        draws++;
        drawsDisplay.textContent = draws;
        resultDisplay.textContent = 'You Both Threw the Same! Draw!';
        again.classList.remove('hidden');
        booya.classList.add('hidden');
        haha.classList.add('hidden');
    }
});


