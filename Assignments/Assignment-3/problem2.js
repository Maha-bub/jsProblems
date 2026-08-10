const filterActiveUsers = (users) => {
    // console.log(users)
    if (Array.isArray(users) == false || users.length === 0 || Object.keys(users).includes('isActive')) {
        return "Invalid";
    }
    let activeUsers = users.filter((user) => {
        if (user.isActive === true) {

            return user;
        }
    })
    return activeUsers;
}



let userList = [
    { name: 'Mahabub', isActive: true },
    { name: 'Tanjil', isActive: false },
    { name: 'Polok' }
]

let userList1 = [
    { name: "A", isActive: true },
    { name: "B", isActive: false }
]
console.log(filterActiveUsers(54))
console.log("Empty array Provided:", filterActiveUsers([]))
console.log(filterActiveUsers(userList))

console.log(filterActiveUsers(userList1))
console.log(filterActiveUsers('userList1'))