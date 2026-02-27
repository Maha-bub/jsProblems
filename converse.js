// 12 inch = 1 feet

// kilo meter to mile convert

function kiloToMile(kilo){
    const mile = kilo/0.6213711922;
    return mile;
}
const kilo = 2;
let mile =kiloToMile(kilo);
console.log(mile);



// mile to kilometer
function kiloToMile(mile){
    let kilo = mile*1.609344;
    return kilo;
}
let kilo =kiloToMile(2);
console.log(kilo);

// inch to feel task two
function inchToFeet (inch){
    const feet =inch/12;
    return feet;
}

const myHeight = inchToFeet(71);
console.log(myHeight);
