const fs = require('fs');

function solve() {
    const caloriesList = fs.readFileSync('./input.txt')
        .toString()
        .split(/\n\s*\n/);
    
    let maximumCaloriesCount = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < caloriesList.length; i++) {
        const currentElfCalories = caloriesList[i].split('\r\n');
        let countCurrentCalories = 0;
        for (let j = 0; j < currentElfCalories.length; j++) {
            const calories = Number(currentElfCalories[j]);
            countCurrentCalories += calories;
        }

        if (countCurrentCalories > maximumCaloriesCount) {
            maximumCaloriesCount = countCurrentCalories;
        }
    }
    console.log(maximumCaloriesCount);
}

solve();
//69206