// function receiptGenerator(productName, price, qty) {
//     let totalPrice = price * qty
//     return `${productName} x${qty} = ${totalPrice} Taka`;
// }

const receiptGenerator = (productName, price, qty) => {

    let totalPrice = price * qty
    return `${productName} x${qty} = ${totalPrice} Taka`;
}

console.log(receiptGenerator('pen', 10, 4))

console.log(receiptGenerator('Book', 15, 4))

console.log(receiptGenerator('pen', 154, 4))