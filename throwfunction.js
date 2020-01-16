//need to export it all
export { getRandomThrow, getThrowFromNumber, checkResult };

function getRandomThrow() {
    const randomNumber = Math.random();
    return getThrowFromNumber(randomNumber);
}

function getThrowFromNumber(number) {
    if (number <= 0.33) return 'rock';
    if (number >= 0.67) return 'paper';
    else return 'scissors';
}  

function checkResult(player, computer) {
    if (computer === player) return 'draw';
    if (computer === 'scissors' && player === 'rock') return 'win';
    if (computer === 'paper' && player === 'scissors') return 'win';
    if (computer === 'rock' && player === 'paper') return 'win';
    else return 'lose';
}