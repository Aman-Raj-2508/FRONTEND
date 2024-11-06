var x = function gun() {
    console.log("gun");
}

console.log(x);
x();
console.log(x());
let a = x();
console.log(a);
gun();//error because gun is in the scope of x not globally so can't access
