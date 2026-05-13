function countSteps(steps) {
    let stepsTotal = 0;
    let updatetracker = {
        totalStep: 0,
    }
    for (const step of steps) {
        console.log(step);
        stepsTotal += step;
    }
    console.log("Total steps in this week:",stepsTotal)
    updatetracker.totalStep = stepsTotal;
    if (stepsTotal >= 50000) {
        updatetracker.fitness = true
        return updatetracker;
    } else {
        updatetracker.fitness = false
        return updatetracker;
    }
    // return updatetracker;
}



const stepsOfArray = [8540, 4521, 10001, 8709,10,20000, 800];
const result = countSteps(stepsOfArray);
console.log(result);