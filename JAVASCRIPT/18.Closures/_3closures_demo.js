/** When task is reassigned then the fun function task is also changed */
function todo() {
    var task = "assignments";
    console.log("start of todo");
    setTimeout(function fun() {
        console.log("completed", task);
    }, 2000);
    task = "dayananda";
    console.log("end of todo");
}

console.log("starting");
todo();
console.log("ending");
