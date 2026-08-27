//  adding two numbers
 function addition(a,b){
     const sum=a+b;
     return sum
};

// substruct two numbers
function substructor(a,b){
     const substruct=a-b;
     return substruct;
};

// multiply two number
function multiplication(a,b){
     const multiply=a*b;
     return multiply;
};

// Divide two number
function division(a,b){
    const devide=a/b;
    return devide;
};

function calculator(a,b,operation){
    if(operation ==='add'){
        const result = addition(a, b);
        return result;

    }
    else if(operation ==='substruct'){
        const result = substructor(a, b);
        return result;
    }
    else if(operation ==='multiply'){
        const result = multiplication(a, b);
        return result;
        
    }
    else if(operation==='division'){
        const result = division(a, b);
        return result;

    }
    else{
        return ("operation is not allowed")
    }

}

const result= calculator(5,5,'multiply');
console.log(result);