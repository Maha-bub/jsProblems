const array1 = [140, 120, 125, 125]
const array2 = [140, 220, 115, 126, 125]

const margeArray = [...array1, ...array2];
const newArray=new Set(margeArray)
console.log(newArray)