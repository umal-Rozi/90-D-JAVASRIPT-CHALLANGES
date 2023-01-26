/*let a;
let b;
let c;

a= window.prompt("enter a");
a= Number(a);

b= window.prompt("enter b");
a= Number(b);

c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("side", c)
*/

document.getElementById("submit").onclick=function(){
    a= document.getElementById("atex").value;
    a= Number(a);

    b= document.getElementById("btex").value;
    b= Number(b);

c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

document.getElementById("Clabel").innerHTML="side c:"+c;

}
