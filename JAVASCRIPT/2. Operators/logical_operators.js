console.log(true && false);//And
console.log(false || false);//Or
console.log(true && true);
console.log((5 < 10) && (6 < 3));
console.log(!(3 > 4));//Not
console.log(~true); // true is treated as 1 in bitwise operator and negation is -(1+1) = -2
console.log(6 && 7);
//shortcircuiting
console.log((10 > 7) && (6 < 7));
console.log(10 || 0);
console.log(0 || -0); // 0 and - 0 both are falsy