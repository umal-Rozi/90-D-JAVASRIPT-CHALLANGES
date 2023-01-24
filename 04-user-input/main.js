// how to accept user input

// using input user name 

//let username =window.prompt("what is your name");
//console.log(username);

let username;
document.getElementById("btn").onclick =function(){
    username= document.getElementById("mytext").value;
    console.log(username);

    document.getElementById("mylebal").innerHTML= "hello "+ username

}
// you can use in two diffentent way in user input 