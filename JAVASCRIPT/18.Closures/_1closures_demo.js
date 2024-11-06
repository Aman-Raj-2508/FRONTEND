function todo(task) {
    setTimeout(function fun() {
        console.log("completed", task);
    }, 2000);
}

console.log("starting");
todo("assignments");
console.log("ending");  