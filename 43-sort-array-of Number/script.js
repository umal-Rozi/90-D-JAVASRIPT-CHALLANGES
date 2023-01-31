
// sort array in numbers 

let greds =[23,45,67,89,90];

greds =greds.sort(decendingsort); // di
greds.forEach(print);


greds =greds.sort(ascendingsort); //as
greds.forEach(print);


function decendingsort(x,y){
    return y-x;
}

function ascendingsort(x,y){
    return x - y;
}


function print(element) {
    console.log(element);
}