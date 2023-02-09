
// windows = interface used to talk to the browser 
// the DOM  is the prototype of the window 

console.dir(window);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);
window.location.href="http://google.com";
console.log(window.location.hostname);
console.log(window.location.pathname);



 const btn = document.querySelector("#mybtn");
 btn.addEventListener("click", () =>  window.open());
btn.addEventListener("click", () =>  window.close());
btn.addEventListener("click", () =>  window.print());

window.alert("Please enter");
window.confirm("Please enter");

let age =window.prompt("Please enter");
if (age <19) {
    window.alert("Please enter");
    window.close();
}
