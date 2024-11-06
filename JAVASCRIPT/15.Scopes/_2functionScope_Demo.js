var name = "Aman" //declared outside the function
function greet() {
    console.log("Greetings !", name);
    var x = 10; //declared inside greet funciton
    function test() {//declared inside greet funtion
        console.log("Test", x);
    }
    test();//assccesbale inside greet funciton and test can access X
    console.log(x); //assccesbale inside greet funciton
}

function fun() {
    console.log("Have fun", name);
}

//calling the function
greet();
fun();

// console.log(x);//error
// test();//error