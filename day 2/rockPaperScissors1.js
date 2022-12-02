const fs = require('fs');

// A for Rock, B for Paper, and C for Scissors - for opponent
// X for Rock, Y for Paper, and Z for Scissors - for my moves
// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won)

function solve() {
    const input = fs.readFileSync('./input.txt')
        .toString()
        .split('\n');
    
    let myTotalScore = 0;
    const outcomes = {
        "A X": 3,
        "A Y": 6,
        "A Z": 0, 
        "B X": 0,
        "B Y": 3,
        "B Z": 6,
        "C X": 6,
        "C Y": 0,
        "C Z": 3,
    }

    const myShape = {
        "X": 1,
        "Y": 2,
        "Z": 3
    }

    input.forEach(turn => {
        turn = turn.trim();
        let shape = turn.split(' ')[1];
        myTotalScore += outcomes[turn] + myShape[shape];
    });

    console.log(myTotalScore);
}

solve();
//15422