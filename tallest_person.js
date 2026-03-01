const height =[140,241,15,124,178,145,125,147,123,85,156,250];
function getMaxHeight(talest){
    let maximum = talest[0];
    for(const tall of talest){
        if(tall>=maximum){
            maximum = tall;
        }
    } return maximum;

    
}

const maxHeight = getMaxHeight(height)
console.log(maxHeight);