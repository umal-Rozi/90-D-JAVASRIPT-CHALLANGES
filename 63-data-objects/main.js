
//  tha date object used to wrk dates $ time

let date = new Date();

date= date.toDateString();
console.log(date);
document.getElementById("mylabel").innerHTML= date;

function formatedate() {
    let year= date.getFullYear();
    let month= date.getFullmonth();
    let day= date.getFulldate();

    return `${year} ${month} ${day}`
}