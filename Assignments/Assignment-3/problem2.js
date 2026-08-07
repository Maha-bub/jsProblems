const filterActiveUsers = (users) => {
    // console.log(users)
    if (Array.isArray(users) == false || users.length === 0 || Object.keys(users) != 'isActive') {
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
// console.log(filterActiveUsers(54))
// console.log("Empty array Provided:", filterActiveUsers([]))
console.log(filterActiveUsers(userList))
// console.log(filterActiveUsers('userList'))