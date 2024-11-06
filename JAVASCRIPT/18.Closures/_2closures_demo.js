/** To clarify that function todo is over when function fun is called */
function todo(task) {
    console.log("start of todo");
    setTimeout(function fun() {
        console.log("completed", task);
    }, 2000);
    console.log("end of todo");
}

console.log("starting");
todo("assignments");
console.log("ending");