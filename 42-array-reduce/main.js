
// array.reduce = reduce an array to a signal value 

//  sign value like shop

let prices =[20, 30 ,40 ,50,60];
let total =prices.reduce(checkOut);

console.log(`The total is : $${total}`)

function checkOut(total, element){
    return total+element;
}