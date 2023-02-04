
// 

class gadhi{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const gadhi1 = new gadhi("harari", 2023, "balck");
const gadhi2 = new gadhi("harari", 2024, "red");
const gadhi3 = new gadhi("harari", 2025, "bulue");

dispalyinfo(gadhi1);


function dispalyinfo(gadhi){

        console.log(gadhi.model);
        console.log(gadhi.year);
        console.log(gadhi.color);

}