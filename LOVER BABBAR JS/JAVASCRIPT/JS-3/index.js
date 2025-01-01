let lastName = 'Raj';

let firstName = new String('Aman');

let message = 'This is my first message';

let words = message.split(' '); //The variable word store the message words based on the space

console.log(words);

//------------------------------1.Difference between string and template literal

// let message1 = 'this is
// my
// second message';

//This above method of printing in  diffferent lines gives error

// let message1 = 'this is \n my\n second message';  //we need to add escape characters

let message1 = 'this \'is \n my\n "second" message';

console.log(message1);


//------------------------------2. So to remove this extra \n or anything or any escape character we use template literal

let message2 = `this is 
my second
message`; //template literal since backtick used. No need to add \n

console.log(message2);


//------------------------------3. To make something DYNAMIC we use dollar sign syntax ${}

let message3 = `Hellp ${firstName} ,

Thanks for Opportunity

Regard's,
XYZ `;

console.log(message3);

//------------------------------4. Date and Time Object

let date = new Date(); //Gives the current date and time
console.log(date);

let date1 = new Date(1998, 11, 20, 7) //year month day and time . Note indexing of month starts with 0.
console.log(date1);

date1.setFullYear(1999); //sets the year;
console.log(date1);


//--------------------------------5. ARRAYS

//5.1 Creating the arrays
let numbers = [1, 4, 5, 7];
console.log(numbers);

//5.2 Accessing the arrays
console.log(numbers[0]);

//5.3 Insertion in arrays
//5.3.1 At end
numbers.push(9);
console.log(numbers);

//5.3.2 At Beginning
numbers.unshift(6);
console.log(numbers);

//5.3.3 At Middle
numbers.splice(2, 0, 's', 'a', 'u');
console.log(numbers);
console.log(numbers[3]);

//5.4 Searching in arrays
console.log(numbers.indexOf('s'));
//we want to check if a number exist or not
console.log(numbers.includes(7));

//5.4.1 What if apply these on references

let courses = [
    { no: 1, subject: 'Frontend' },
    { no: 2, subject: 'java' }
];
console.log(courses);
console.log(courses.indexOf({ no: 1, subject: 'java' })); //In objects we can't use this method to find out the element as this object has different reference than the other object. Therefore it returns -1.

//5.4.1.1 To search in objects , we have to use callback functions using find fucntions

// let course = courses.find(function (sub) {
//     return sub.subject == 'Frontend';
// });
// console.log(course);

//5.4.1.2 To make Code more readable , we use ARROW functions.

// let course = courses.find((sub) => { //function keyword removed
//     return sub.subject == 'Frontend';
// });
// console.log(course);

let course = courses.find(sub => sub.subject == 'Frontend'); //Brackets and return keyword removed as single line of code. 
console.log(course);

//5.5 Removing the elements
let numbers1 = [2, 4, 7, 8, 9];
//5.5.1From end
numbers1.pop();
console.log(numbers1);

//5.5.2From beginning
numbers1.shift();
console.log(numbers1);

//5.5.3From middle
numbers1.splice(2, 1);
console.log(numbers1);

//5.6Emptying an array
let numbers2 = [1, 2, 3, 4, 5, 6];
let numbers3 = numbers2;

// numbers2 = [];
// console.log(numbers2);//prints empty but 
// console.log(numbers3);//prints the elements of numbers2, but this is a pass by reference because this is object,So the elements are not copied in numbers3 instead numbers3 and numbers2 point to the same location.It means that the elemenst are not deleted.

//5.6.1so we do numbers.length =0;
// numbers2.length = 0;
// console.log(numbers2);
// console.log(numbers3);

//5.6.2
numbers2.splice(0, numbers2.length);
console.log(numbers2);
console.log(numbers3);

//5.7 Combing and Slicing the arrays
//5.7.1 COMBINING
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined);

//5.7.2 SLICING
let sliced = combined.slice(2, 4);
console.log(sliced);

//5.7.3 Combining using SPREAD Operator
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let combined1 = [...arr3, ...arr4];
let combined2 = [...arr3, 'a', ...arr4, 'b', true];
console.log(combined1);
console.log(combined2);

//5.8 ITERATING the array
let arr = [10, 20, 30, 40, 50];

//5.8.1 FOR-OF loop
// for (let value of arr) {
//     console.log(value);
// }

//FOR-EACH loop
arr.forEach(num => console.log(num));

//5.9 JOINING Arrays

let arr5 = [10, 20, 30, 40, 50];
console.log(arr5);
// For difference see the output
const joined = arr5.join(',');
console.log(joined);

//5.10 SPLITING Arrays
let msg = 'This is my first msg';
let parts = msg.split(' ');
console.log(parts);

//5.11 SORTING Arrays
let arr6 = [1, 4, 8, 9, 2, 0, 7, 6];
// let sorted = arr6.sort();
// console.log(sorted);
console.log(arr6.sort());
// to reverse
arr6.reverse();
console.log(arr6);

//5.12 FILTERING the array

let unfiltered = [-1, 2, -4, 5];

let filtererd = unfiltered.filter(value => value > 0);
console.log(filtererd);

//5.13 MAPPING

//5.13.1 Mapping in array
let id = [1, 2, 4, 5];
let items = id.map(value => 'student_no = ' + value);
console.log(items);

//5.13.2 Mapping in Objects
let nums = [1, -5, 6, -2];
let filtered1 = nums.filter(value => value >= 0);

let mapped = filtered1.map(num8 => ({ value: num8 }));

console.log(mapped);