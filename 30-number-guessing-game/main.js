
const ans = Math.floor(math.radnom() *10 + 1);
let guesses =0;
document.getElementById("btnsubmit"),onclick= function(){

    let geus =document.getElementById("feild").value;
    guesses+=1;

    if (geus == ans) {
        alert(`${ans} is the #. it look you ${guesses} guesses` );
    }
    else if(geus < ans){
        this.alert("too small");
    }
    else{
        this.alert("two large!");
    }
}