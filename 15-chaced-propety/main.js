

document.getElementById("btn").onclick=function(){
    if (document.getElementById("checkbox").Checked) {
        const checkbox =document.getElementById("checkbox");
        const visabtn=document.getElementById("visabtn");
        const masterbtn=document.getElementById("mastbtn");
        const paypalbtn=document.getElementById("paybtn");

        if (checkbox.Checked) {
            console.log("you sub");
        }
        else{
            console.log("your not ");
        }
        if(visabtn.Checked){
            console.log("pay with visa");
        }
        else if(masterbtn.Checked){
            console.log("pay with master");
        }
        else if(paypalbtn.Checked){
            console.log("pay with paypal");
        }
        else{
            console.log("your select this payment");
        }
    }
}
