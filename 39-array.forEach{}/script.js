
// array foreach = executes a provide callbock function 
// once for each array elements


let ardayaal =["mid", "midada", "huda"];
ardayaal.forEach(capi);
ardayaal.forEach(print);

function capi(elements,index, array){
    array[index]= elements[0].touppercase() + elements.substring(1);
}
function print(elements){
    console.log(elements);
}