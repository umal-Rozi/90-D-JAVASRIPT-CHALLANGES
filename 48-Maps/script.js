
//maps = Object that hold key-value pairs of any data type 

const store =new Map([
    ["shoes",20],
    ["bag",15],
    ["mobile",500],
]);

let shopingcart= 0;
shopingcart += store.get("shoes");
console.log(shopingcart);
store.set("hat",30); // marka lagu darayoh 
store.delete("hat"); // delete

console.log(store.size); // size la eegayaa

store.forEach((value,key) => console.log(`${key} $${value}` ));
