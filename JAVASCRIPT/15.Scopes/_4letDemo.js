// if (true) {
//     let x = 10; //block Scope 
//     console.log(x);
// }
// function fun() {
//     console.log(y);
//     let y = 8;
//     console.log(y);
// }
// fun();
// console.log(x);  //error


/**---let is not complete global scope but var is---*/

if (true) {
    let x = 10; //block Scope 
    console.log(x);
}
// console.log(z); //gives error in case of let = z but  not in case of var =z

function fun() {
    // console.log(y);
    let y = 8;
    console.log(y);
}

fun();

// let z = 99; //it is global scope but not accessible everywhere
var z = 99;
console.log(z); // let keyword allows this print since it is after initialisation
// console.log(x);  //error