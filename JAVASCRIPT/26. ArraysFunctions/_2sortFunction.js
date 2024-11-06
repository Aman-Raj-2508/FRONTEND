let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

arr.sort();

console.log(arr);


let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

//to sort b in increasing order

b.sort(function (a, b) {
    return a - b; //if a < b -> a-b will be negative -> if comparator funciton gives negative then a is placed before b and vice versa 

}); //sort is a HOF, the sort fucniton takes a comparator fucniton as argument

console.log(b);