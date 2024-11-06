function isEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

for (let i = 1; i <= 20; i++) {
    console.log(i, "is", isEvenOdd(i));
}