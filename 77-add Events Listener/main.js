
//addEventListener = event, function , useCapture
// you can add many events handlers to one element
// even the same event that invokes different function


const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");

innerdiv.addEventListener("mouseover", changetellow);
innerdiv.addEventListener("mouseout", blueviolet);

function changetellow() {
    innerdiv.style.backgroundColor="yellow";
}

function blueviolet() {
    innerdiv.style.backgroundColor="blueviolet";
}

innerdiv.addEventListener("click", changetellow);
outerdiv.addEventListener("click", changetellow, true);

function changetellow() {
    alert("you selectror");
        this.style.backgroundColor ="lightblue";
    }


