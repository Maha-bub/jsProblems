const bonusScore = (scores) => {
    if (!Array.isArray(scores) ? "Invalid" : scores.length === 0 ? "Invalid" : !scores.every(element => typeof element === 'number') ? "Invalid" : scores);

    let updatedScore = scores.map(score => {
        return score + 10;
    })

    let totalScore = updatedScore.reduce((accumulator, score) => {
        return accumulator + score;
    }, 0)
    return totalScore;
}

let score = [10, 20, 10, 13];

console.log(bonusScore(score));
console.log(bonusScore([0, 10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([100]));
console.log(bonusScore([80, "90", 70]));
console.log(bonusScore([80, 65, 90, 75]

));