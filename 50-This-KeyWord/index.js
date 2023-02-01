

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



const car2 ={
    model:"mustang",
    color:"red",
    year:2024,

    drive: function () {
        console.log(`you drive the ${this.model}`);
    },
    breke: function () {
        console.log(`you drive the ${this.model}`);
    }
}
console.log(car.model);
console.log(car.color);
console.log(car.year);

car2.drive();
car2.breke();


console.log(this);// this key word