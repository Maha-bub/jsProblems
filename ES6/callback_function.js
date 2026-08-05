
//when a function agrument aslo a function its call callback functions
function userIdentity(cp) {
    console.log(cp());
    return cp();
}

function userBasicInfo() {
    const info = {
        name: 'mahabub',
        age: 23
    }
    return info;
}

console.log(userIdentity(userBasicInfo));