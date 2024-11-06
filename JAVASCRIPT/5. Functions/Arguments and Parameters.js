function add(x, y) {
    let c = x + y;
    console.log(c);
    // return c;//return sum only
}

let a = 20;
let b = 30;
let x = add(a, b)//without return c in above code,it returns prints sum and then undefined,
//because add function there is no return command so console.log returns undeifned and variable x stores return value of a function
//when var = function is done
console.log(x);
// console.log(add(a, b));//works same as let x = add becauses add function when called it prints 50 and then returns undefined as it does not return anything when
//return c is commented and then again console.log prints undefined
