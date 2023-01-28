
// nested loop loop inside anteher loop 

let symbol=window.prompt("enter simplo"); // input ahaan baad u so galinysaa
let rows=window.prompt('enter of rows');
let colums=window.prompt('enter of colums');

for(let k=1; k<=rows; k+=1){
    for(let j=1; j<=colums; j+=1){
        document.getElementById("regtal").innerHTML+=symbol;
    }
    document.getElementById("regtal").innerHTML+="<br>";
}