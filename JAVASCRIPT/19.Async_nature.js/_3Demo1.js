function process() {
    console.log("start");
    setTimeout(function exec() {
        console.log("task done")
    }, 3000);
    for (let i = 0; i < 10000000000; i++) {
        //some code
    }
    console.log("end");
}

process();

/**-----When timer is 0ms still for loop will execute first */
function process() {
    console.log("start");
    setTimeout(function exec() {
        console.log("task done")
    }, 0);
    for (let i = 0; i < 10000000000; i++) {
        //some code
    }
    console.log("end");
}

process();
console.log("TATA");

/**------Or even if timer is more than the for loop time still for loop will execute */
function process() {
    console.log("start");
    setTimeout(function exec() {
        console.log("task done")
    }, 10000);
    for (let i = 0; i < 10000000000; i++) {
        //some code
    }
    console.log("end");
}

process();
console.log("TATA")

/**----What if there is two timers*/
function process() {
    console.log("start");
    setTimeout(function exec() {
        console.log("task1 done") //task1 will be executed later as it has long time and it will be added in the event queue later and queue is first come first serve
    }, 5000);
    setTimeout(function exec() {
        console.log("task2 done")//task2 will be executed first as it has less time than task1 and it will be added in the event queue first and queue is first come first serve
    }, 3000);
    for (let i = 0; i < 10000000000; i++) {
        //some code
    }
    console.log("end");
}

process();