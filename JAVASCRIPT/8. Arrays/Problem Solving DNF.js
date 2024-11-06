let arr = [1, 1, 0, 0, 1, 0];
let i = 0;
let j = arr.length - 1;
while (i < j) {
    if (arr[j] == 1) {
        j--;
    } else {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
    }
}
console.log(arr);