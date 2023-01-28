
//return = is value back to the place 
// where you invoked a functin

let area;
let width;
let height;

width= window.prompt("enter width");
height= window.prompt("enter heigth");

area=getArea(width, height);

console.log("the area is:", area)

function getArea(width, height) {
    let result = width * height;
    return result;
}


