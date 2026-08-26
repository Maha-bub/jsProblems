const getMonthName = (monthNumber) => {
    const monthName = monthNumber.map((num) => {
        if (num === 1) {
            return 'January';
        } else if (num === 2) {
            return 'February';
        } else if (num === 3) {
            return 'March';
        } else if (num === 4) {
            return 'April';
        } else if (num === 5) {
            return 'May';
        } else if (num === 6) {
            return 'June';
        } else if (num === 7) {
            return 'July';
        } else if (num === 8) {
            return 'Auogust';
        } else if (num === 9) {
            return 'September';
        } else if (num === 10) {
            return 'October';
        } else if (num === 11) {
            return 'November';
        } return 'Decembor';




    })
    console.log(monthName)
    return monthName;
}


const monthNum = [12, 1, 12, 10, 11, 5, 4, 8, 9]
console.log(getMonthName(monthNum));