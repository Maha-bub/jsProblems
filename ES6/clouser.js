function amountRegister() {
    let amount = 0;
    return function (shopAmount) {
        amount += shopAmount;
        return "Total Amount" + amount;
    }
}

const TotalShopAmount = amountRegister()

console.log(TotalShopAmount(100));
console.log(TotalShopAmount(400));
console.log(TotalShopAmount(100));
console.log(TotalShopAmount(100));

const cofeeShopAmount=amountRegister();

console.log(cofeeShopAmount(350))
console.log(cofeeShopAmount(350))
console.log(cofeeShopAmount(50))

console.log(TotalShopAmount(700));