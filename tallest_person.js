// find a tallest person from in an array
const height =[140,241,15,124,178,145,125,147,123,85,156, 10, 250];
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

//  find a lowest person from in an array elements
function getMinHeight (lowest){
    let minimum = lowest[0];
    for(const min of lowest){
        if(min<=minimum){
            minimum=min;
        }
    }return minimum

}
const minHeight = getMinHeight(height);

console.log(minHeight);