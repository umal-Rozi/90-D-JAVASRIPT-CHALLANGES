

// tolocalestring ()= returns a string with a langugae
//      sensitive representation of this 

// number.tolocalestring(locale, {options});

// `locale`= specify that languge (undefined = dufult set in browser)
//  options = object with formatting options

let mynum =1234567;

mynum = mynum.toLocaleString("so-so"); // that is somali number
mynum = mynum.toLocaleString("hi-in");// that is hindi number

mynum = mynum.toLocaleString("so-so", {style: "currency", currency: "usd"});
mynum = mynum.toLocaleString("so-so", {style: "currency", currency: "cash"});


mynum =mynum.toLocaleString(undefined,{style: "percent"});// as % buu u soo saarayaa


mynum =mynum.toLocaleString(undefined,{style: "unit", unit: "celsius"});
console.log(mynum);


