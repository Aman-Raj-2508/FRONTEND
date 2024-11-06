const arr = [1, 2, 3, 4, 5, 6];
function sum(prevResult, currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result);
/**
 * zeroth element -> 1 (this will be the current and as well the previous value)
 * first element -> 2 (previous ->1)
 * second element -> 3 (previous will be 3)
 * third element -> 4
 * fourth element -> 5
 * fifth element -> 6
 */


/**
 * REAL LIFE EXAMPLE
 * 
 * cart -> [iphone {price: 100000, name: "Ipone"}, case {price:500, name "Backcover"},
 * temperedGlass {price:300 , name:"tempered glass"}]
 */


// Want to show the total value of cart
function addPrices(prevResult, currValue) {
    console.log(prevResult, currValue);
    let newPrice = prevResult.price + currValue.price;
    return { price: newPrice };
};
let cart = [{ price: 100000, name: "Ipone" }, { price: 500, name: "Backcover" },
{ price: 300, name: "tempered glass" }];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice, totalPrice.price)