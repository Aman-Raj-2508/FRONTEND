{
    var x = 10;//global
    console.log(x);
}
console.log(x);

/**       -------------------         */
if (true) {
    var z = 30;//global
}


if (false) {
    var a = 20;//global
}

console.log(z);
console.log(a);


/**       -------------------         */
function fun() {
    var y = 10; //function scope
    console.log(y);
}
fun();
console.log(y);//error


/**       -------------------         */
function fun() {
    console.log(z);//why we get unefined? --> It is due to Lexical scoping
    var z = 10; // z is a function scope,so can be accessed even before declaring it?
    console.log(z);
}
fun();




