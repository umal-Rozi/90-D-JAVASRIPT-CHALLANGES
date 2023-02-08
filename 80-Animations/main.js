
const mybutn =document.getElementById("btn");
const amimation =document.getElementById("mydiv");

mybutn.addEventListener("click", begin);

function begin() {
    let timerId = null;
    let x = 0;
    let y=0;

    timerId = setInterval(frame, 5);

    
    function frame(){
        if (x >= 200 || y >= 200) {
            clearInterval(timerId);
        }
        else{
            x+=1;
            Animation.style.Left= x + "px";
            Animation.style.top = y + "px";
        }
    
    }

}


function begin() {
    let timerId = null;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    
    function frame(){
        if (degrees >= 360 ) {
            clearInterval(timerId);
        }
        else{
            degrees+=1;
            Animation.style.transform="rotateX("+degrees+" deg)";
        }
    
    }

}