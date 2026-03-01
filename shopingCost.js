const products = [
  { name: "shampo", price: 240, Quantity: 4 },
  { name: "shoap", price: 200, Quantity: 1 },
  { name: "Oil", price: 350, Quantity: 2 },
  { name: "Chiruni", price: 100, Quantity: 3 },
];
function totalShopingCost(products) {
  let totalPrice = 0;
  for (const product of products) {
    //    const perProductPrice=product.price*product.Quantity;
    totalPrice = totalPrice + product.price * product.Quantity;
  }
  return totalPrice;
}

const total = totalShopingCost(products);
console.log(total);
