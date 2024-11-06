console.log(12 - 4);
//both of them are just a number so just subtract

console.log(undefined - 10);
//undefined coverted to NaN because of To Number abstract operation

console.log(null - 10);
//null converted to +0 by to Number abstract operation

console.log("132" - 10)
//"132 is a string,so abstract operartion to number converts "132 --> to number 132 and [132-10 =122]"

console.log("12fd" - 20)
//"12fd is string,so abstract operation to number is called and to number("12fd")--> NaN because this string cannot be parsed to number

// console.log(Symbol("123") - 30)type error

console.log(true - 8);
//true converted to 1

console.log(NaN - NaN);
//Invalid number - invalid number is invalid number and since it is a nubmer so no conversion needed

console.log([null] - 9);
//array of null coverted to 0

console.log([undefined] - 9);
//array of undefined converted to 0

console.log("070" - 9);
//"070" coverted to 70

console.log("0xf" - 1);
//"0xaf" is a string, but in a string 0x denotes start of hex decimal number so f in hexdecimal is 15, and 15-1 is 14

console.log("abcd" - 2);
//Not able to convert string"abcd" to number

console.log("011" - 1);
//takes "011" as decimal number

console.log("0o11" - 1);
//"0o11" is a string,and can become a valid octal number, toNumber("0o11")-->9, and (9-1) =8

// New key value overrides the old one
// console.log(10 - {
//     "a": 10, valueOf() { return 8; },
//     "b": 10, valueOf() { return 4; },
//     "c": 10, valueOf() { return 3; }
// });

// console.log(10 - {
//     "a": 10, valueOf() { return {}; }, toString() { return "5"; }
// });
