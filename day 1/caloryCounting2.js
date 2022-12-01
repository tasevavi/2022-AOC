const fs = require('fs');

function solve() {
    const caloriesList = fs.readFileSync('./input.txt')
        .toString()
        .split(/\n\s*\n/);
    
    let sumsOfCalories = [];
    let finalSumOfThree = 0;
    for (let i = 0; i < caloriesList.length; i++) {
        const currentElfCalories = caloriesList[i].split('\r\n');
        let countCalories = 0;
        for (let j = 0; j < currentElfCalories.length; j++) {
            const calories = Number(currentElfCalories[j]);
            countCalories += calories;
        }

        sumsOfCalories.push(countCalories);
    }
    sumsOfCalories.sort((a, b) => b - a);
    let firstThreeSums = sumsOfCalories.slice(0,3).forEach(x => finalSumOfThree += x);
    console.log(finalSumOfThree);
}

solve();
//197400
