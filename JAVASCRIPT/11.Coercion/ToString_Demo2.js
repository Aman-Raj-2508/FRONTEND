console.log("Aman" + { "a": 10 });
/**
 * "Aman" --> is already a primitive since string
 * { "a": 10 } --> is not a primitive, so, we call toPrimitive without a hint,since we are only passing object not any 
 * preferred type,means hint-->number
 * we first call value of { "a": 10 } --> and it returns same object
 * we call toString, which returns a string of '[object Object]',
 * and since it is a string , So it is primitive
 * Now
 * therfore "Aman" +'[object Object]' --> Aman[object Object] , string concatenation happens
 */

console.log(10 - { "a": 45 });
/**
 * 10 is already a number
 * { "a": 45 } is going to get converted ToNumber, and this is an object
 * for object we call ToPrimitive  with hint Number
 * first we call valueOf --> it returns the same object -->{ "a": 45 }
 * then we call toString --> return the string of '[object Object]' which is primitive,Now
 * So call ToNumber on string '[object Object]' again which gives NaN
 * 10-NaN=NaN
 */

//We can Override the value of toString and valueOf
let x = { "b": 90, valueOf() { return 2; } }
console.log(x - 10);
/**
 *  x is an object , we need to pass it to ToPrimitive with hint Number
 * we call valueOf-->it returns 2 ,which is primitive
 * So after it returns primitive it return the result,so x =2
 * 10 is already a number
 * 2-10=-8
 */

let y = { "d": 90, valueOf() { return 2; }, toString() { return "custom"; } }
console.log(x + "Aman"); //x will be 2 here

let z = { "c": 90, valueOf() { return {}; }, toString() { return "custom"; } }
console.log(z + "Aman"); //customAman


console.log("Aman" + { "a": 90, valueOf() { return {} }, toString() { return {} } });
/**gives error */