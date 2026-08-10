// let total = (discount, ...rest) => {
//     // console.log(rest)
//     if (!discount) {
//         discount = 10;
//     }
//     let totalPrice = rest.reduce((accumulator, element) => {
//         return accumulator + element;
//     }, 0);
//     let discountTotal = totalPrice * discount / 100;
//     let totalPriceAfterDiscountApply = totalPrice - discountTotal;
//     return totalPriceAfterDiscountApply;
// };

// console.log("Discount Applied: ", total(12, 12, 14, 15, 42))
// console.log("Discount Applied: ", total(100, 120, 100, 150, 200))


// The rest operator gathers all remaining arguments into the prices array
let total = (discount = 10, ...prices) => {
    // If someone passes null or 0, fallback to 10
    if (!discount) {
        discount = 10;
    }

    let totalPrice = prices.reduce((accumulator, element) => {
        return accumulator + element;
    }, 0);

    let discountTotal = (totalPrice * discount) / 100;
    return totalPrice - discountTotal;
};

// 1. Using a custom 12% discount (First argument is 12, rest are prices)
console.log("12% Discount: ", total(12, 12, 14, 15, 42));

// 2. Using the default 10% discount (Pass undefined first, rest are prices)
console.log("Default 10% Discount: ", total(undefined, 12, 14, 15, 42));
