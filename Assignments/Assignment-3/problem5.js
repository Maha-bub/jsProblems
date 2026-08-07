function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0 || !students.every(student => 'score' in student) && typeof student.score !== 'number') {
        return "Invalid";
    }

    const qualified = students.filter(student => {
        if (student.score >= 70) {
            return student.name;
        }
    });

    const names = qualified.map(name => {
        return name.name.toUpperCase();
    });

    return names;
}




// const student1 = [
//     { name: "A" },
//     { name: "B", score: 71 }
// ]



console.log(generateLeaderboard([{ name: "Rafi" }]))

// console.log([])
// console.log("students")
// console.log([{ name: "Rafi" }]
// )
// console.log([{ name: "Rafi", score: "90" }])