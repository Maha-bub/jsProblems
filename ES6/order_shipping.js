const calculateShipping = (orderAmount, shipping = 60) => {
    return orderAmount >= 1000 ? "Free Shipping" : `Shipping Fee :${shipping} Taka`;
}


console.log(calculateShipping(100,100))