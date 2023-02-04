
// get = bind a object property to the function
// when the property is accessed


class motor{
    constructor(power) {
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
}
let motors = new motor(500);

console.log(motors.power);