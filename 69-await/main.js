
// await = make an async function wait for a promise

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
async function start(){
   try{
    let messege = await loadfile();
    console.log(messege);
   }
  catch(error){
    console.log(error);
  }
}
start();


 
