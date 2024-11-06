function fun(inputString, fn) {
    //slipts the string by comma
    let output = inputString.split(',');//ouput is an array
    for (let i = 0; i < output.length; i++) {
        fn(output[i]);//for every element of output , we are calling the callback function
    }
}

fun("name:sanket,subject:cse", function process(input) {
    let arr = input.split(":");
    console.log("{", arr[0], "-->", arr[1], "}");
})


/**But my mistake one calls fn function twice then things are very bad */
//This is known as inversion of control

function fun(inputString, fn) {
    //slipts the string by comma
    let output = inputString.split(',');//ouput is an array
    for (let i = 0; i < output.length; i++) {
        fn(output[i]);//for every element of output , we are calling the callback function
        fn(output[i]);
    }
}

fun("name:sanket,subject:cse", function process(input) {
    let arr = input.split(":");
    console.log("{", arr[0], "-->", arr[1], "}");
})
