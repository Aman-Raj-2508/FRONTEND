console.log("abc" == "abc");
let x = "abc";
let y = "abc";
console.log(x == y);

let z = String("abc");
let a = new String("abc");
console.log(z);

console.log(a == z);
console.log(a == x);
console.log(z == x);
console.log("abc" == new String("abc"));

console.log(a === z);
console.log(a === x);
console.log(z === x);
console.log("abc" === new String("abc"));

// This is beacuse the types are different so === returns false
console.log(typeof a);
console.log(typeof z);
console.log(typeof x);