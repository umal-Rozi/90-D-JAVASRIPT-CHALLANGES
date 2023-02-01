
// nested function = function inside other function.
//  other function have acess to inner outside  the outher function


let usermane =  "umal";
let userIbox =0;

login();

function login() {
    dispaleusername();
    dispaleuserInbox();

    function dispaleusername() {
        console.log(`welcome ${usermane}`);
    }
    function dispaleuserInbox() {
        console.log(`you have  ${userIbox} new massege`);
    }
}

