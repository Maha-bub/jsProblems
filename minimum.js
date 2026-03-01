const price =[25000,8000,14020,12500,14700,100000,32000,78000,10000];
function chepestOne(array){
    let chepestOne = array[0];
    for(const cheap of array){
        if(chepestOne>= cheap){
            chepestOne=cheap;
        }
    } return chepestOne;

}
const minimumOne = chepestOne(price);
console.log("THe cheapest one is:",minimumOne);