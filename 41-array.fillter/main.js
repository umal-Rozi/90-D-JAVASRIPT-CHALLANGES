
// array.filtter()= create a nwe rray all elements 
//    that pass the test provide by a function

let ages = [12,34,45,67,89,90];
let adult = ages.filtter(checkage);

adult.forEach(print);
    

function checkage(elements){
    return elements >= 12;
}

function  print(elements){
    console.log(elements);
}