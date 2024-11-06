let a = "10";
let b = 'aman';
let c = 'abc';
let d = 10 - c;

console.log(a, b, c, d);

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

let x = NaN;
console.log((typeof (x) == 'number' && isNaN(x)) ? "NaN value" : "Not NaN value");

