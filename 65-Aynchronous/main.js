
// sysnchronous code = in an order sequence
//           step by step linear instruction
//           start now, finish now,

// Aysnchronous code = out of sequence
//               EX. access a database 
//               fatch a file tasks that take time 
//               start now, finish sometime  later...

console.log("================start================");// sysnchronous
setTimeout(() =>  console.log("===========this is Aysnchronous =========="));
console.log("==============END==================");