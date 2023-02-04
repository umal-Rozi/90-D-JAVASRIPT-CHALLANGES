

class gadhi{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`drive the ${this.model}`);
    }
}

const gadhi1 = new gadhi("harari", 2023, "balck");
const gadhi2 = new gadhi("harari", 2024, "red");
const gadhi3 = new gadhi("harari", 2025, "bulue");

const gadhis =[gadhi1, gadhi2, gadhi3];

console.log(gadhi[0].model);
console.log(gadhi[1].model);
console.log(gadhi[2].model);

