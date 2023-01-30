
document.getElementById("btn").onclick =function(){
   
    let temp;
    if(document.getElementById("cbutton").checked ==true){
        temp =document.getElementById("texbox").value;
        temp=Number(temp);
        temp=tocesium(temp);
        document.getElementById("temlabel").innerHTML = temp +"c";

    }
    else if (document.getElementById("fbutton").checked ){
        temp =document.getElementById("texbox").value;
        temp=Number(temp);
        temp= tofarhernheit (temp);
        document.getElementById("temlabel").innerHTML = temp +"F";
    }
    else{
        document.getElementById("temlabel").innerHTML= "select a unit";
    }
}
 function tocesium(temp) {
    return (temp -32)* (5/9);
 }
 function tofarhernheit(temp) {
    return  temp* 9/5+32;
 }

