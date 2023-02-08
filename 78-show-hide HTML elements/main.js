

const mybutton= document.querySelector("#mybutton");
const myimg= document.querySelector("#myimage");

mybutton.addEventListener("click", () => {
    if (myimg.style.display=="none"){
        myimg.style.display= "block";
    }
    else{
        myimg.style.display="none";
    }

});

mybutton.addEventListener("click", () => {
    if (myimg.style.visibility=="hidden"){
        myimg.style.visibility= "visible";
    }
    else{
        myimg.style.visibility="hidden";
    }
    
});