console.log("Chaliye suru karte hai");

//Object create
let rectangle1 = { // write rectangle1 on browser to see the elements 
    length: 1,
    breadth: 2,


    draw: function () { //use rectangle1.draw() on browser to see the output
        console.log('draw');
    }
};


//factory function is one way
//Create a functin that creates rectangle
function createRectangle() {
    return rectangle = {
        length: 1,
        breadth: 2,

        draw: function () {
            console.log("Drwaing rectangle");
        }
    };
    // return rectangle
};
let rectangleobj1 = createRectangle(); // the object of createRectangle is stored in rectangle obj1
// The above code has issue that the length and breadth is always 1

function createRectangle(l, b) {
    return rectangle = {
        length: l,
        breadth: b,

        draw: function () {
            console.log("Drwaing rectangle");
        }
    };
    // return rectangle
};
let obj2 = createRectangle(2, 1);
// The above code has variable length and breadth


//Constructor function is another way
//Constructor function do not returns
function Rectangle(l, b) {
    this.length = l;
    this.breadth = b;

    this.draw = function () {
        console.log("Drawing");
    }
}
//object creation using constructor
let obj3 = new Rectangle(4, 6);

//Dynamic nature of objects
//adding
obj3.color = 'blue';
console.log(obj3);
//deleting
delete obj3.color;
console.log(obj3);

//Pass by value
let a = 10;
function inc(a) {
    a++;
    console.log(a); //11
}
inc(a);
console.log(a); // 10

//paas by reference
let A = {
    value: 10
};
increment(A);
function increment(A) {
    A.value++; //11
}
console.log(A.value); //11


//for-in loop
let rectangle2 = {
    length: 1,
    breadth: 2
};
for (let k in rectangle2) {
    //Keys are reflected through keys variable
    //Values are reflected through rectangle2[key]
    console.log(k, rectangle2[k]);
}

//for-of loop =>  Only applied on iterables



//Object cloning
let obj4 = {}; //Empty object
for (let k in rectangle2) {
    obj4[k] = rectangle2[k]; //cloning
    console.log(k, obj4[k]);
}


//Through assign function
let dest = Object.assign({}, rectangle2);
console.log(dest);

let src = { value: 25 };
let dest2 = Object.assign({}, rectangle2, src); //multiple cloning
console.log(dest2);

src.value++;
console.log(dest2); //Does not print the incremented value means we have cloned

//Through Spread
let dest1 = { ...rectangle2 };
console.log(dest1);
