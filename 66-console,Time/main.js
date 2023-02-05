
// conslo.time= start a timer you can use to trck how lon g an opearation
// take give each timer a unique name.


// start
console.time("start the timer");

alert("start the timer");
setTimeout(() => console.log("hello world"), 3000);

// end 
console.timeEnd("end the timer");