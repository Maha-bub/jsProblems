const filterActiveUsers = (users) => {
    // console.log(users)
    if (Array.isArray(users) == false || users.length === 0 || !users.every(user => 'isActive' in user)) {
        return "Invalid";
    }
    let activeUsers = users.filter((user) => {
        if (user.isActive === true) {
            return user;
        }
    })
    return activeUsers;
}


let userList = [{ name: "A" }]



let userList1 = [
    { name: "A", isActive: true },
    { name: "B", isActive: false }
]

console.log(filterActiveUsers(userList))

console.log(filterActiveUsers(userList1))
console.log(filterActiveUsers("users"))
console.log(filterActiveUsers([]))

