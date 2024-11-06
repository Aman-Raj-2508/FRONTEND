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