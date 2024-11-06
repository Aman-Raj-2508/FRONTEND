let a = 10;
let b = 5;
let c = 12;

if (a + b > c && b + c > a && c + a > b) {
    console.log("Valid triangle")
} else {
    console.log("Invalid Triangle")
}

// Second variation

let x = 7;
let y = 7;
let z = 7;

if (x == y && y == z && z == x) {
    console.log("Equilateral triangle")
} else if (x == y || y == z || z == x) {
    console.log("Isosceles triangle")
} else {
    console.log("Scalene triangle")
}