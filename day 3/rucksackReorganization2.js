const fs = require('fs');

function solve() {
    const input = fs.readFileSync('./input.txt')
        .toString()
        .split('\n')
        .map(x => x.trim());

    let priority = [];

    for (let i = 0; i < input.length; i+=3) {
        let line1 = input[i].split('');
        let line2 = input[i+1];
        let line3 = input[i+2];

        for (let j = 0; j < line1.length; j++) {
            const element = line1[j];
            if (line2.includes(element) && line3.includes(element)) {
                priority.push(element);
                break;
            }
        }
    }
        
    let result = 0;

    priority.forEach(match => {
        let value = match.charCodeAt();
        result += value < 97 ? value - 38 : value - 96;
    });

    console.log(result);
}

solve();
//2413