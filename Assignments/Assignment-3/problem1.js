// function studentIntroduction(student) {
//     // Write your code here
// }


const studentIntroduction = (student) => {
    if (typeof (student) != 'object') {
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