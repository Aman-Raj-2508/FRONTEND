//1. Declaring Function

run(); //no error
function run() {
    console.log("running");
}

//Calling function
// run();

//2.Named Function Assignment
// stand(); //error
let stand = function walk() {
    console.log('walking');
};

stand();

let jump = stand;
jump();//again prints walking but i am not able to print

//3. Anonymous Function Assignment
let stand2 = function () {
    console.log('walking');
};

stand2();

//4. JS is Dynamic Language

let x = 1;
x = 'a';
console.log(x); //dynamically assign string a also to int x


function sum(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(1));//only one value so 'b' has value undefined so 1+undefined is NaN.
console.log(sum(1, 2, 3, 8, 9));//3 output.
//we can send less equal as well as more input as parameter also.So it handles dynamically.

//5. Even there is only one parameter accepted by the fucntion
//We can pass many values as arguments

function sum2(a, b) {
    // console.log(arguments);
    let total = 0;
    for (let value of arguments) { //this is an object
        total += value;
    }
    return total;
}

console.log(sum2(1, 4, 6, 7, 8));

//6. Using REST operator

function sum3(num, ...args) {
    console.log(args); //this is an array. 
}

sum3(1, 2, 3, 4, 5, 6, 7); //num => 1 and args => 4,5,...

//error we can't put any parameter after REST operator
// function sum3(num, ...args,mum2) {
//     console.log(args);
// }

// sum3(1, 2, 3, 4, 5, 6, 7);

//7. Default Parameters
function simpleInterest(p, r, t = 10) {
    return p * r / 100 * t;
}

console.log(simpleInterest(1000, 5, 5)); //Here the parameter value is used.
console.log(simpleInterest(1000, 5)); //If any parameter is not passed then the default value is used otherwise the parameter value is used.

//8.GETTER & SETTER
let person = {
    fName: 'Aman',
    lName: 'Singh',

    //GETTER
    get fullName() {
        return `${person.fName} ${person.lName}`;//template literal used
    },
    //SETTER
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('you have not sent a String value')
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    },
};

// console.log(person);
// console.log(fullName());
// person.fullName = 'rahul singh';
// console.log(person.fullName);

//9. TRY AND CATCH
try {
    person.fullName = true;
}
catch (e) {
    alert(e);
}

console.log(person.fullName);