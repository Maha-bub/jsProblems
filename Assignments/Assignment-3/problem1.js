const studentIntroduction = (student) => {

    if (typeof (student) != 'object' || Object.keys(student).length === 0) {
        return "Invalid";
    }
    const { name, age, course } = student
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
}
let studentInfo = {
    name: "Mahabub Alam",
    age: 23,
    course: "AI driven Fullstack Engineering"
}

console.log(studentIntroduction(studentInfo))
console.log(studentIntroduction({}))
console.log(studentIntroduction('studentInfo'))
console.log(studentIntroduction(10))