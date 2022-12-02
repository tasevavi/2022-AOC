const fs = require('fs');

// X lose, Y draw, and Z win.

function solve() {
    const input = fs.readFileSync('./input.txt')
        .toString()
        .split('\n');
    
    let myTotalScore = 0;
    const outcomes = {
        "A X": 0, 
        "A Y": 3, 
        "A Z": 6, 
        "B X": 0, 
        "B Y": 3, 
        "B Z": 6, 
        "C X": 0, 
        "C Y": 3, 
        "C Z": 6,
    }

    const myShape = {
        "A X": "C", //rock wins C
        "A Y": "A", //rock draw A
        "A Z": "B", //rock loose B
        "B X": "A", //paper wins A
        "B Y": "B", //paper draws B
        "B Z": "C", //paper loose C
        "C X": "B", //scissors win B
        "C Y": "C", //scissors draws C
        "C Z": "A", //scissors loose A
    }

    const myPoints = {
        "A": 1,
        "B": 2,
        "C": 3
    }

    input.forEach(turn => {
        turn = turn.trim();
        let shape = myShape[turn];
        myTotalScore += outcomes[turn] + myPoints[shape];
    });

    console.log(myTotalScore);
}

solve();
//15442