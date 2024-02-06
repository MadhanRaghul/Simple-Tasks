//How to check if a given Object is empty or not

let shop = {
    'Fruit':'Apple',
    'Vegetable':'Carrot',
    'Meat':'Chicken',
}

let store = {}

function checkObject(x){
    if(Object.keys(x).length == 0){
        console.log('The given Object is empty')
    }
    else{
        console.log(x)
    }
}

checkObject(shop)
checkObject(store)  //by using .key and .length methods in an If else statement
