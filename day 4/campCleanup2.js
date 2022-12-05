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

        let a = first[0];
        let b = first[1];
        let c = second[0];
        let d = second[1];
        
        if ((a != c && a !=d) && (b != c && b != d)) {
            if (a > c && a > d && b > d) {
                return false;
            }

            if (a < c && b < c && b < d) {
                return false;
            }
        }

        return true;
    }

    function split(pair) {
        return pair.split(',')
            .map(x => x.split('-')
            .map(x => x = Number(x)));
    }

    console.log(overlapsingPairs);
}

solve();
//823