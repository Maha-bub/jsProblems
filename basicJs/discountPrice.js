/*lest then 100 or equals to then per product pricie is 100 tk
greater then 100 and less then or equals to 200 or more then 100 peace then per product price is 90 tk 
and aslo more than buy more than 200 then every singe product discount price is 80 tk

**/ 
function discountPrice (productQuantity){
    if(productQuantity<=100){
        const totalPrice = productQuantity*100;
        return totalPrice;
     }
     else if(productQuantity<=200){
        const totalPrice = productQuantity*90;
        return totalPrice;
     }
     else
        {
        const totalPrice = productQuantity*80;
        return totalPrice;
     }
     
}
const discountTotal= discountPrice(1040);
console.log(discountTotal);