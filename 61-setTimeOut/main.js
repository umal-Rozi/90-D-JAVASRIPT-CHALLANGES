
// SetTimeout() = invoke function after a number of milliseconds
// asynchronous function  does't pause excuted.

let items= "laptop";
let price= 690.90;


let timer1 = setTimeout(firstmessage, 3000 , items, price);
let timer2 =setTimeout(secondmessage, 6000);
let timer3 =setTimeout(thridmessage, 9000);

function firstmessage(items, price){
    alert(`by ${items} for ${price}`);
}
function secondmessage(){
    alert(`guys`);
}
function thridmessage(){
    alert(`welc`);
}
document.getElementById("mybutton").click = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`thanks for buying `);
}