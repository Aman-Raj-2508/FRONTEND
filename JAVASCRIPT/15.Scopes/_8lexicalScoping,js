var teacher = "sanket";//global scope
function fun() {
    var teacher = "pulkit"//Scope of fun
    console.log(teacher);//Scope of fun
}
fun();

// Difference between function scope and global
var teacher = "sanket";
function fun() {
    var teacher = "pulkit"
    console.log(teacher);//calls scope of fun teacher variable
}
console.log(teacher);//calls Global scope  teacher variable
fun();



/** Example given to clarify more   */
// not cleared by sanket sir, told wrong explanation

function fun(val) {
    var student;
}
function run() {
    console.log(student);
}
student = 10; // autoglobal 
function gun() {
    console.log(student); //10 of global scope
    var student = 100; // value of student from 10 to 100
}
gun();
run(); 