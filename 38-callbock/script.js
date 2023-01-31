
//callback = a function passed as an argument to anther function.

let total= sum(2,3);

function sum(x,y) {
    let result = x+y;
    return result;
}
function displayconsole(output){
    console.log(output);
}
function displaydom(output){
    document.getElementById("mylabel").innerHTML = output;
}

sum(2,3 ,dosomthing);

function sum(x,y  , callback) {
    let result =x+y;
    callback(result);
}

