const phones = [
    {phone : 'Iphone', price:100000, model:'Iphone 16 promax'},
    {phone : 'Samsung', price:15000, model:'Iphone 17 promax'},
    {phone : 'Xaomi', price:200000, model:'Iphone 17 promax'},
    {phone : 'Motorola', price:10000, model:'Iphone 17 promax'},
    {phone : 'Iphone', price:150000, model:'Iphone 16 promax'}
]

function expensivePhones (phones){
    let expensive = phones[0];
    for(const phone of phones){
        if(phone.price>expensive.price){
            expensive = phone;
        }
    } return expensive;
}

const expensivePhone = expensivePhones(phones);
console.log(expensivePhone);