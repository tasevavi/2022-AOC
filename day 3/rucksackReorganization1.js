const fs = require('fs');

function solve() {
    const input = fs.readFileSync('./input.txt')
        .toString()
        .split('\n');

    let priority = [];

    input.forEach(line => {
        const part1 = line.slice(0, line.length/2);
        const part2 = line.slice(line.length/2);
        for (let index = 0; index < part1.length; index++) {
            const element = part1[index];
            if (part2.includes(element)) {
                priority.push(element);
                return;
            }
        }
    });

    let result = 0;
    priority.forEach(match => {
        let value = match.charCodeAt();
        result += value < 97 ? value - 38 : value - 96;
    });

    console.log(result);
}

solve();
//8394