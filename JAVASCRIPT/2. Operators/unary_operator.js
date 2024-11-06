// Postfix increment
let a = 10;
let y = a++;
console.log(a, y);

a++;
console.log(a, y);

// Prefix Increment
let b = 10;
let x = ++b;
console.log(b, x);

++b;
console.log(b, x);

//Postfix decrement
let c = 10;
let z = c--;
console.log(c, z);

c--;
console.log(c, z);

//Prefix decrement
let d = 10;
let f = --d;
console.log(d, f);

--d;
console.log(d, f);

// Unary plus
let g = "22"; //string
let h = +g;
console.log(typeof h);

// Unary minus
let i = "22"; //string
let j = -i;
console.log(typeof j);
console.log(j);

//Assignment
let ans = 0;
let s = 0;
for (let i = 0; i < "23"; i++) {
    a = ans++;
}
console.log(ans);
console.log(s);