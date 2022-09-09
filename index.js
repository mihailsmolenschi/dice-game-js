let diceOne = Math.floor(Math.random() * 6) + 1;
let diceTwo = Math.floor(Math.random() * 6) + 1;

function diceImagePath(dice){
    let diceImagePath = '';

    switch(dice) {
        case 1: diceImagePath = 'images/dice1.png'; break;
        case 2: diceImagePath = 'images/dice2.png'; break;
        case 3: diceImagePath = 'images/dice3.png'; break;
        case 4: diceImagePath = 'images/dice4.png'; break;
        case 5: diceImagePath = 'images/dice5.png'; break;
        case 6: diceImagePath = 'images/dice6.png'; break;
    }

    return diceImagePath;
}

document.getElementById('playerOneDice').setAttribute('src', diceImagePath(diceOne));
document.getElementById('playerTwoDice').setAttribute('src', diceImagePath(diceTwo));

if      (diceOne > diceTwo) document.querySelector('h1').innerHTML = '🎉 Player 1 wins!';
else if (diceTwo > diceOne) document.querySelector('h1').innerHTML = 'Player 2 wins!🎉';
else                        document.querySelector('h1').innerHTML = '🎉 Draw! 🎉';
