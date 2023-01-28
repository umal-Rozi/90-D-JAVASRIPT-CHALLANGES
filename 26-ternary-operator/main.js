
// ternary opeator shortcut for a if/else statement 
//  take 3 operand
//  1. a conditinal with ?
//  2. experssion if true:
//  3. experssion if false

// continal ? exprIftrue :  exprIffalse

let arguman =checkAge(12);
console.log(arguman);

function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    else{
        return false;
    }
}



let argum =checkAge(12);
console.log(argum);

function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    return age >= 18? true: false;
}



checkwin(false);
function checkwin(win){
    win? console.log("you win!"): console.log("you win!")
}