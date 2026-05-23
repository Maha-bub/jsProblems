function totalSum(startnum,endnum){
    let sum=0;
    for(let i=startnum;i<=endnum; i++){
        sum +=i;
    }
    return sum;
}


// const resultOfSum=totalSum(1,25);
console.log(totalSum(1,25))
console.log(totalSum(10,15))
console.log(totalSum(1,2))
console.log(totalSum(-1,5))