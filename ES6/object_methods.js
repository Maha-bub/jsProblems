const user={
    name:"Mahabub",
    age:35,
    id:4554
}

const keys=Object.keys(user)
const values=Object.values(user)
const entrues=Object.entries(user)
// console.log(keys,values)
// console.log("Entries:",entrues)

const freeze=Object.seal(user)
user.name="mahabub"
console.log(freeze);

delete user.name;
console.log(user)