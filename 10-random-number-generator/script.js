

//this is optinal using the sort game 

let u= Math.random()*7; // wuxuu so saayaa numbers u dhexeeyah 0ila 7
let i= Math.random()*7;
let m= Math.random()*7;



let x;
let y;
let z;

document.getElementById("roll").onclick=function(){
    let x= Math.floor(Math.random() *7) +1;
    let y= Math.floor(Math.random() *7) +1;
    let z= Math.floor(Math.random() *7) +1;


    document.getElementById("xlable").innerHTML=x;
    document.getElementById("ylable").innerHTML=y;
    document.getElementById("zlable").innerHTML=z;
}