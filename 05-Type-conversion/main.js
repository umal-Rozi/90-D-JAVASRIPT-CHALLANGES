// type-convasion = change the datype of value to anther 
//        (string, number, booleans)

let age =window.prompt("how old are you"); //as messege ahaano kleh ayuu ugu soo baxayaa.


console.log(typeof age); // waxa uu shegyaa types of data noocytahy 
age=Number(age); // markaad doonysid in numbers loo badlo waxd isticmaalysaa numbers


console.log(typeof age)
age+=1; // this data are like string using  wax uu uaqoonsynaa like string oo kleh.

console.log("happy brithday! you are", age, "years ild");




let x;
let y;
let z;

x= Number("3.2"); // waxa lo soo saraya qaaab istring oo kal ah 
y= String(3.9); // string weteyeh 
z= Boolean("harakoo");

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);