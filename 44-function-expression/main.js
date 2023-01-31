
// function experession = function without a name (Anonymouse function)
//   aviod polluting gobal with names

let count =0;

function increaseCount() {
    count+=1;
    document.getElementById("mylabel").innerHTML = count;
}
function decreaseCount() {
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
}




document.getElementById("decreaseCount").onclick = function(){
    count+=1;
   document.getElementById("mylabel").innerHTML = count;
}
document.getElementById("increaseCount").onclick = function(){
    count-=1;
   document.getElementById("mylabel").innerHTML = count;
}

