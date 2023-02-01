
// objects = A group of properteis and method 
//      proreteis  = what an a objects has 
//          method = what an objects can do 
//             use. to access properties/method.

const car ={
    model:"mustang",
    color:"red",
    year:2023,

    drive: function () {
        console.log("you drive the car");
    },
    breke: function () {
        console.log("you drive the brakes");
    }
}
console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.breke();


