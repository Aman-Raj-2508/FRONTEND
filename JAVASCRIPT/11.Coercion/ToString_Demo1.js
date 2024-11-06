console.log("Aman" + "Raj");
/* Both of them are already a string
* So to primitive conversion will also be a string
* and we concatenate them
*/
console.log(undefined + "node");
/* undefined --> "undefined"
* "undefined"+"node" -->"undefinednode"
*/

console.log("5" + null);
/* null --> "null"
* 5+"null" -->"5null"
*/

console.log("sanket" + true);
/* true --> "true"
* "Sanket"+"true" -->"sankettrue"
*/
console.log("sanket" + [null, undefined]);

console.log(undefined + null);
/*undefined and  null both are primitive
*so to primitive returns them and
none of them are string so 
to number is done */