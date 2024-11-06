function square(el) {
    return el * el; //returns square
}
const arr = [1, 2, 3, 4, 5]; //original array

const result = arr.map(square); //square is fucniton passed as an argument
//map function passes all the elements of the original array in the function square
//Stores the returned value in an array
console.log(result);
console.log(arr);


const newarr = [9, 8, 7, 6, 5];

function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
    // console.log(`Element at index ${idx} is ${element}`)
}

const result2 = newarr.map(print);
console.log(result2);

// newarr.map(print);