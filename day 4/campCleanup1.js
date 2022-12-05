const fs = require('fs');

function solve() {
    const input = fs.readFileSync('./input.txt')
        .toString()
        .split('\n')
        
    let overlapsingPairs = 0;
    
    input.forEach(pair => {
        let oneContainsTheOther = compare(pair);
        oneContainsTheOther === true ? overlapsingPairs++ : '';
    });

    function compare(pair) {
        let [first, second] = split(pair);
        if (first[0] <= second[0] && first[1] >= second[1]) {
            return true;
        }

        if (first[0] >= second[0] && first[1] <= second[1]) {
            return true;
        }

        return false;
    }

    function split(pair) {
        return pair.split(',')
            .map(x => x.split('-')
            .map(x => x = Number(x)));
    }

    console.log(overlapsingPairs);
}

solve();
//431