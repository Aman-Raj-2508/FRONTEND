// Creating Objects
let x = { name: "Aman", age: 22 };
let y = {
    name: "Peter",
    age: 4,
    marks: 4//Same Value
};

// Access any value using key but no vice versa
console.log(x["name"]);
console.log(y.name);

// Objects are mutable
y.name = "Himanshu"
console.log(y);

// How to add new key value pair to a already created object
x.marks = 100; //if marks key is already present it will update it , otherwise ,it adds it
x["Company"] = "Google";
console.log(x);

//delete a key value pair
//use delete operator along with  object.key
delete x.name;
console.log(x);

let z = {
    name: ["Aman", "Aditya", "Himanshu"],
    age: 5
};
console.log(z.name);