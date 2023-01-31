
// rest parameters = repersent in indefinite number of parameters
// pack arguments into an array

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;



function sum(a,b){
    return a+b;
}
function sum(a,b,c){
    return a+b+c;
}
function sum(a,b,c,d){
    return a+b+c+d;
}

console.log(sum(a,b,c,d,e));
function sum(...numbers){
    let total=0;
    for (let nmber of numbers) {
        total+=Number
        
    }
    return total
}