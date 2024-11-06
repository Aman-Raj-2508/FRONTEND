// Strict Equality

console.log(NaN === 23);
/**
 * Left is NaN, So false
 */
console.log(NaN === NaN);
/**
 * Left is NaN, So false
 */
console.log(10 === 10);
/**
 * Same number value both side,So true
 */
console.log(10 === 11);
/**
 * Different number value both side,So false
 */
console.log(+0 === -0);
/**Left is +0 and right is -0
 * So return true
 */
console.log(-0 === +0);
/**Left is -0 and right is +0
 * So return true
 */

console.log(undefined === undefined);
/**
 * type is not a number so sameValueNonNumber called
 * returns true
 */

console.log(null === null);
/**
 * type is not a number so sameValueNonNumber called
 * returns true
 */

console.log("Aman" === "Aman");
/**Does character by character comaprison
 * so true
 */

console.log("Aman" === "Adit");
/**Does character by character comaprison
 * so false
 */

// console.log({ "a": 10 } === { "a": 10 });
/**
 * returns false because the object are internally treated in different memory,
 * so they are different
 */

//ALWAYS FALSE
// console.log({} === {});

//But
let x = { "a": 10 };
console.log(x === x);
/**
 * Returns true as the value of objects are stored in a variable and
 * variable === variable is true
 */

console.log(Symbol('Aman') === Symbol('Aman'));
/**
 * Same reason that was for objects,they are in different memory
 */

// BUT
let y = Symbol('Aman');
console.log(y === y);