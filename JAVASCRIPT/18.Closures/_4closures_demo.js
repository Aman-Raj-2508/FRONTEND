function a(name) {
    return function b() {
        console.log(name);
    }
}

let x = a("sanket");
console.log(x);
x();
