

// tempate literals = delimter with(')
// instead of double or single queates
// allows embedded variable and experssince


let  name ="umal";
let items = 3;
let total= 55;


console.log("helo", name);
console.log("you have", items);
console.log("iska bixi lacgta adeer $", total);


console.log(`hello ${name}`);
console.log(`you haystaa ${items}`);
console.log(`iska bixi lacgta ${total}`);



let tex= 
`hello ${name},'<br>'
you haystaa ${items},'<br>'
iska bixi lacgta ${total}`;'<br>'

//console.log(tex);

document.getElementById("labell").innerHTML=tex;

