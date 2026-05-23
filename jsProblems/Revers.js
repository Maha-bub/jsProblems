function reversStr(str){
    const strarr=str.split("");
    // console.log(strarr)
    let revstr=[];
    for(let i=strarr.length-1; i>=0; i--){
        revstr.push(strarr[i]);
        

    }
    console.log(revstr);
    return revstr.join("");

}

console.log(reversStr("I am proud to be a muslim"));
console.log(reversStr("Hi, This is Sumit"));
console.log(reversStr("Mahabub Is a Name"));