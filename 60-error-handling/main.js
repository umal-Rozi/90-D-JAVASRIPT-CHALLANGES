
// error handling with a description
// of something want wrong
//          can't open a file
///         lose connection user 
//          tpes incorrect 

//console.log() // like this 

try{
    console.log();
}
catch(error){
    console.log(error);
}
 


try{
    let x=window.prompt("enter your number #")
    x=Number(x);
}
catch(error){
    console.log(error);
}
 