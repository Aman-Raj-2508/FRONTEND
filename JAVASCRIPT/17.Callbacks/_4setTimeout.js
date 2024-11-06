/**function execute will execute after 3s */
setTimeout(function execute() {
    console.log("task completed");
}, 3000);

/** start and end will be frinted then function execute will take place */
console.log("start")
setTimeout(function execute() {
    console.log("task completed");
}, 3000);
console.log("end");

/** Example to show the use case of id returned by seetTimeout function */
let id1 = setTimeout(function execute1() {
    console.log("task completed 1");
}, 10000);

let id2 = setTimeout(function execute2() {
    console.log("task completed 2");//
    clearTimeout(id1);//To stop the execution of execute1 function
}, 5000);
