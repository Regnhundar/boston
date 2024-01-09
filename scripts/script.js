// Spelet har 3st tärningar.

// Kasta tärningarna och spara tärningen med högsta värdet.
// Kasta de kvarvarande 2 och spara tärningen med högsta värdet.
// Kasta sista tärningen och summera samtliga tre tärningar.
// Spelaren med högst summerat värde vinner. Max poäng är 18.

let roundOne = true;
let roundTwo = false;
let roundThree = false;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOne = true;
let playerTwo = false;

while (playerOne) {
    console.log(`Spelare 1!`)
    while (roundOne) {
        let diceOne = Math.floor(Math.random() * 6 + 1);
        let diceTwo = Math.floor(Math.random() * 6 + 1);
        let diceThree = Math.floor(Math.random() * 6 + 1);

        if (diceOne > diceTwo && diceThree) {
            playerOneScore += diceOne;
        }
        else if (diceTwo > diceOne && diceThree) {
            playerOneScore += diceTwo;
        }
        else {
            playerOneScore += diceThree;
        }
        roundOne = false;
        roundTwo = true;
    }

    console.log(`Första rundan gav spelare ett ${playerOneScore} poäng`)

    while (roundTwo) {
        let diceOne = Math.floor(Math.random() * 6 + 1);
        let diceTwo = Math.floor(Math.random() * 6 + 1);

        if (diceOne > diceTwo) {
            playerOneScore += diceOne;
        }
        else {
            playerOneScore += diceTwo;
        }
        roundTwo = false;
    }

    console.log(`Efter andra rundan har spelare ett ${playerOneScore} poäng`)

    let diceOne = Math.floor(Math.random() * 6 + 1)
    playerOneScore += diceOne;

    console.log(`Efter tredje rundan har spelare ett ${playerOneScore} poäng`)
    playerOne = false;
    playerTwo = true;
}
console.log(`----------------------------`)
while (playerTwo) {
    console.log(`Spelare 2!`)
    roundOne = true;
    while (roundOne) {
        let diceOne = Math.floor(Math.random() * 6 + 1);
        let diceTwo = Math.floor(Math.random() * 6 + 1);
        let diceThree = Math.floor(Math.random() * 6 + 1);

        if (diceOne > diceTwo && diceThree) {
            playerTwoScore += diceOne;
        }
        else if (diceTwo > diceOne && diceThree) {
            playerTwoScore += diceTwo;
        }
        else {
            playerTwoScore += diceThree;
        }
        roundOne = false;
        roundTwo = true;
    }

    console.log(`Första rundan gav ${playerTwoScore} poäng`)

    while (roundTwo) {
        let diceOne = Math.floor(Math.random() * 6 + 1);
        let diceTwo = Math.floor(Math.random() * 6 + 1);

        if (diceOne > diceTwo) {
            playerTwoScore += diceOne;
        }
        else {
            playerTwoScore += diceTwo;
        }
        roundTwo = false;
    }

    console.log(`Efter andra rundan har du ${playerTwoScore} poäng`)

    let diceOne = Math.floor(Math.random() * 6 + 1)
    playerTwoScore += diceOne;

    console.log(`Efter tredje rundan har du ${playerTwoScore} poäng`)
    playerTwo = false;
}
console.log(`----------------------------`)
if (playerOneScore > playerTwoScore) {
    console.log(`Spelare 1 vann! ${playerOneScore} mot ${playerTwoScore}.`)
}
else {
    console.log(`Spelare 2 vann! ${playerTwoScore} mot ${playerOneScore}.`)
}