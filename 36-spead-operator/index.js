
// spread operator = allow an iterable such as an
// ...
//  in place where zero or more
//  argument are expecetd unpack the elements.


let username ="Umalrozi";
console.log(...username);


let numbers =[1,2,3,4,5,6,7,8,9,0];
let maxium = Math.max(...numbers);
console.log(maxium);

let class1 = ["umal", "moha", "rozi"];
let class2 = ["cabdi", "ozman", "roze"];

class1.push(...class2);

console.log(...class1)
