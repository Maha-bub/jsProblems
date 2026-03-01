const mobiles = [
    { name:'Samsung', price: 22000, camera:'12mp', color:'black' },
    { name:'Xoami', price: 25000, camera:'12mp', color:'black' },
    { name:'Walton', price: 15000, camera:'12mp', color:'black' },
    { name:'Iphone', price: 110000, camera:'12mp', color:'black' },
    { name:'Oppo', price: 30000, camera:'12mp', color:'black' },
    { name:'HTC', price: 27000, camera:'12mp', color:'black' }
]
function getCheapestPhone(phones){
    let lowestPrice =mobiles[0];
    for(const cheap of phones){
        if(cheap.price < lowestPrice.price){
            lowestPrice= cheap;

        }
    } return lowestPrice;
}
const cheap = getCheapestPhone(mobiles)
console.log("Cheapeast phone is:",cheap);