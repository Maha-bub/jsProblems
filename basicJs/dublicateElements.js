// separate diblicte elements from an array

const public =['Alam', 'Kalam', 'majed', 'Kalam', 'Alam', 'turna', 'sumi','turna','Mahabub','turna'];
console.log("Total Array Person :",public.length);
function eniquePerson(array){
    let uniquePublic =[];
    for( const unique of array){

        if(uniquePublic.includes(unique)===false){

            uniquePublic.push(unique);
        }
    }
    return uniquePublic;
}

const unique = eniquePerson(public);
console.log("Unique number of every single person is:",unique.length);
console.log(unique);

function dublicateElements(elements){
    let only = [];
    for(const unique of elements){
        if(only.includes(unique)== false){
            only.push(unique);
        }
    }return only;
}

const uniqueElements = dublicateElements(public);
console.log(uniqueElements);