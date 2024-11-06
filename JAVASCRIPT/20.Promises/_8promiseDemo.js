function dummyPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Timer's Promise")
        }, 0);
    });
}

console.log("Start of the file"); //1

setTimeout(function timer1() {
    console.log("Timer1 done");//4
    let y = dummyPromise();
    y.then(function promiseY(value) {
        console.log("Whose promise?", value);
    });
}, 0);


let x = Promise.resolve("Sanket's Promise");
x.then(function processPromise(value) {
    console.log("Whose promise?", value);//3
});

setTimeout(function timer2() {
    console.log("Timer2 done");
}, 0);

console.log("End of the file");//2