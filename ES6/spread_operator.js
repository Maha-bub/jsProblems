const arr = [3, 4, 30, 44, 14, 13, 74, 83, 45, 67, 7, 7, 6];
const spreadOperator = [...arr]
// console.log(spreadOperator)
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))


const identity = {
    name: 'mahabub',
    age: 23,
    address: 'Jaldhaka'
}

const identityCp = { ...identity, class: 10 }
// console.log(identityCp);

const person = {
    habib: 44,
    mahabub: 32,
    liyes: 43
}

const { habib, liyes } = person

// console.log(habib)
// console.log(mahabub)
// console.log(liyes)


const arrays = [110, 520, 120, 142, 150, 150, 254, 452];

function elements(a, b,...restNumbers) {

    return console.log(restNumbers);

}

const result = elements(110, 520, 120, 142, 150, 150, 254, 452);
console.log(result);