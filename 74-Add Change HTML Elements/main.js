
// add/change/html element
//.innerhtml(vulnerable to xss attacks)
//.textcontect (more secure)

const  nameTag= document.createElement("h1");
nameTag.innerHTML=window.prompt("enter name");
document.body.append(nameTag);


// marka aad wax ku darysid html ka 
const mylist =document.querySelector("#khudrad");
const listItem= document.createElement("li");
listItem.textContent="muus"
mylist.append(listItem); 
mylist.prepend(listItem); 
mylist.insertBefore(listItem, getElementByTagName("li") [1]);

