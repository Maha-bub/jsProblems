let discountPrice = (productPrice, discount = 0) => {
    let discountPriceArray = productPrice.map((element, ind) => {
        // console.log(ind, element)
        const discountedPrice = element - ((element * discount) / 100);
        return discountedPrice;

    })
    return discountPriceArray;
}
let arr = [125, 456, 254];
console.log(discountPrice(arr,5));