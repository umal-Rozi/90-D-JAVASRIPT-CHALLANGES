

// slector by id 

let element = document.getElementById("mylabel");
element.style.backgroundColor = "yellow";

// slector by name 

let fruits =document.getElementsByName("fruits");

fruits.forEach(fruits =>{
    if(fruits.checked){
        console.log(fruits.value);
    }
})

// sector by tag 

let yanyan = document.getElementsByTagName("li");

yanyan[0].style.backgroundColor="lightgreen"
yanyan[1].style.backgroundColor="lightblue"
yanyan[2].style.backgroundColor="red"

let yanyan= document.querySelectorAll(".yanyan");
yanyan.forEach(element =>{
    element.style.backgroundColor="red";
 
}) // markad mar wada selector garynsid


// selector by class name

let macmcan =document.getElementsByClassName("macmacan");
macmcan[0].style.backgroundColor="lightgreen";



// query selecoters  waxaad ku so daabic kartaa id clas and tag in tabah 
let ciwan= document.querySelector("#title"); // if you want all elements you use querySelector
ciwan.style.backgroundColor="#ff000f";

