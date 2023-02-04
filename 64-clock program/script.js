
const mylabel= document.getElementById("mylabel");

update();

function update(){
    let date = new Date();
    mylabel.innerHTML= formatTime(date)

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amorpm = hours >= 12 ? "pm" : "am";

        hours=(hours % 12) || 12;

        return `${hours} ${minutes} ${seconds} ${amorpm}`
    }
}