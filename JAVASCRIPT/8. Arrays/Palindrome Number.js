function isPalindrome(num) {
    let originalnum = num;
    let reversenum = 0;
    while (num > 0) {
        let ld = num % 10;
        reversenum = (reversenum * 10) + ld;
        num = Math.floor(num / 10);
    }
    if (reversenum == originalnum) {
        return "Palindrome Number";
    }
    return "Not a Palindrome";
}

let num = 1441;
let result = isPalindrome(num);
console.log(result);