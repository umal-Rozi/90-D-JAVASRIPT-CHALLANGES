
//arrow function = compact to a traditional function 
//            =>


const greeting = (username) => console.log(`hello ${username}`);

greeting("umal");


const precent = function(x,y){
    return x/y*100;
}
console.log(`${precent(34,45)}%`);



let grades= [100,50,90,60,80];

grades.sort( dec );
grades.forEach(print);

function dec (x,y){
   return y-x;
}
function print(element) {
    console.log(element)
}

// it same result 
grades.sort( function dec (x,y){
    return y-x;
 } );
grades.forEach(function print(element) {
    console.log(element)
});

grades.sort((x,y) => y-x);
grades.forEach((element) => console.log(element));

// thre way is jus same


