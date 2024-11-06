function fun(x, fn) {
    /**
     * x  be a --> number
     * fn be some -->function
     */

    //some logic
    for (let i = 0; i < x; i++) {
        console.log(i);
    }
    fn();//calling the callback function
}

//This is the callback function 
fun(10, function log() {
    console.log("custom logger");
})

//We can pass anonymous function as calllbacks
fun(10, function () {
    console.log("Anonymous logger");
})

//We can pass separate function also
function gun() { //function declaration
    console.log("inside gun");
}

gun();

fun(15, gun);//whereas if we just paas as a name gun it is call first fun then the logic inside this

fun(15, gun());//when we put a pair of parenthesis it means we are immediately callling the function and 
//it will throw error as it will return undefined as gun will return undefined as gun is
// not returning anything so console.log returns undefined and in fun (10,undefined) 
//will be passed and  when fn() --> as undefined() called gives error

//We can pass function expression as well
let g = function () {
    console.log("Inside g");
}
fun(2, g);