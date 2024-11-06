let arr = [1, 2, 3, 4, 5];
arr.map(function procress(v, i) {
    /**
     * v-->value
     * i-->index
     */
    console.log(v, i);
});

let arr1 = [1, 2, 3, 4, 5, 6];
let x = arr1.map(function procress(v, i) {
    /**
     * v-->value
     * i-->index
     */
    console.log(v, i);
});
console.log(x); //prints undefiend because map funciton is not returning anything so undefined is returned


let arr2 = [1, 2, 3, 4, 5];
let y = arr2.map(function procress(v, i) {
    /** 
     * v-->value
     * i-->index
     */
    console.log(v, i);
    return v * v;
});
console.log(y); //prints square of all vlaues since square is returned
console.log(arr2); //original arrays remains same