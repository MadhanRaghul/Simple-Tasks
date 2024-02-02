//How to check if a given array is Empty or not

let Fruits = ['Apple','Orange','Tomato']
let Vegetables = []

function checkArray(x){
    if(x == ''){
        console.log('The given array is Empty')
    }
    else{
        console.log(x)
    }
}

checkArray(Fruits)
checkArray(Vegetables)  //by using an If else statement