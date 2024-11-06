console.log("Start of the file");
setTimeout(function timer1() {
    console.log("Timer1 done");
}, 0);

for (let i = 0; i < 1000000; i++) {
    //something
}

let x = Promise.resolve("Sanket's Promise");
console.log(x);
x.then(function processPromise(value) {
    console.log("Whose promise?", value);
});

setTimeout(function timer2() {
    console.log("Timer2 done");
}, 0);

console.log("End of the file");