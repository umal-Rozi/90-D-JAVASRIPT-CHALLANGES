
// setinterval= invokes a functin repeadly after a number of milliseconds
// asynchronous function  ( doesn pause execution)

let count= 0;
let max = window.prompt("count");
max= Number(max);

const mytimer = setInterval(countup,1000);

function countup() {
    count+=1;
    console.log(count);
    if (count >= max) {
        clearInterval(mytimer);
    }

}