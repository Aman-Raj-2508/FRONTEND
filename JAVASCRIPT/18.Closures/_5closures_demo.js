//example 1
function test() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i:${i}`);
        }, i * 1000);
    }
}

test();

//example 2 states that it is same as above var got a function scope so all the timers acces it
function test() {
    for (var i = 0; i < 3; i++) {
        var j = i;
        setTimeout(function exec() {
            console.log(`i:${j}`);
        }, i * 1000);
    }
}

test();

//exapmle 3 states that when let is used it gets block scope and for loop creates
//separate blocks for each timer that's why all gets different value
//in pervious example like clousre_demo1,2,3,4,5.js we were having only 1 timer but in this case we are having 3 different timers
//so different timers gets different i values 
//but in case of var i = 3 at last and since it has function scope so all can access it
//and in case of let for loop creates a different block for each iteration and that timer can access only that value of i that is in his block
//but in case of var all the timers can access the value of i
function test() {
    for (var i = 0; i < 3; i++) {
        let j = i
        setTimeout(function exec() {
            console.log(`i:${j}`);
        }, i * 1000);
    }
}

test();

function test() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i:${i}`);
        }, i * 1000);
    }
}

test(); 