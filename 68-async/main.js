
// synch = make a function returning a promise...


async function loadfile(){
    let fileloading = true; // flase 
{   
        if(fileloading){
            return"file loading";
        }
        else{
            throw "file not loading";
   
        }    
    }   
};
loadfile().then(value=> console.log(value))
        .catch(error => console.log(error));
