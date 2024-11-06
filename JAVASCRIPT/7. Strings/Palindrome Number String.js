function isPalindrome(num) {
    //convert num to string
    let str = "" + num;
    let i = 0;
    let j = str.length - 1;
    while (i <= j) {
        if (str[i] == str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}

let num = 14541;
console.log(isPalindrome(num));