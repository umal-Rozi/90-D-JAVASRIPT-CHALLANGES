
//array.map() excute a provide callback function
// once for each array elemtn and array create new array

let numbers= [1,2,3,4,5];
let squares =numbers.map(square);
let cubes = numbers.map(cubes);

cubes.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

function print(element) {
    console.log(element);
}