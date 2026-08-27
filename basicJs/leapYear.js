const year =2024;
if(year% 400===0||(year%4 === 0 && year % 100 !==0)){
    console.log("It's Leap Year");
}else{
    console.log("It's Not Leap Year");
}