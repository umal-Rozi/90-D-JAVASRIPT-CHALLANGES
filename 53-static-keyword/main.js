
// static = belogs to te class not the objects
// properties: usiful for cashes fixed-configration
// methods: useful for utility functions 

class car{

    numberof = 0;
    constructor(model){
        this.model = model;
        this.numberof=+1;
    }
    starract(){
        console.log("3....2....1....go");
    }
}
const car1 = new car("umal");
const car2 = new car("umal");
const car3 = new car("umal");

console.log(car1.numberof);
console.log(car2.numberof);
console.log(car3.numberof);

console.log(car.numberof);

car1.starract();