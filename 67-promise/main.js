
// promise = objects encapsulates the rusult pf n aysnchronous operation 
// let asynchronous method returm values like synchronous method 
// promise to return somthing in the future...


const promise = new Promise((resolve, reject) =>{
    let fileloading = true;
    if(fileloading){
        resolve("file loading");
    }
    else{
        reject("file not loading");
    }
});


promise.then(()=> console.log(value))
   .catch(error => console.log(error));


   const wait =  time => new Promise(resolve =>{
    setTimeout(resolve, time);
   });
   wait(3000).then(()=> console.log("tank for umal"));

