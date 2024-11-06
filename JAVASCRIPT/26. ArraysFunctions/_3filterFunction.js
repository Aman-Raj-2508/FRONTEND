function oddOrEven(x) {
    // if (x % 2 == 0) {
    //     return true;
    // } //returns a boolean true
    //or
    return (x % 2 == 0); //same thing but syntax is different
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = arr.filter(oddOrEven);
console.log(result);