const countNumberProperties = (numArray) => {
    let positive = 0
    let zeroNum = 0;
    let negetive = 0
    for (const num of numArray) {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negetive++;
        } else {
            zeroNum++;
        }
    }
    return {
        positive,
        negetive,
        zeroNum
    };
}

const numbers = [12, 0, 0, -7, 1, -2, 14, 2, -54, -6, 54, -12, -5, 45, 2, -14];
console.log(countNumberProperties(numbers))