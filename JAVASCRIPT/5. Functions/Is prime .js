function isPrime(n) {
    if (n == 2) {
        return true;
    } else {
        for (let i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isPrime(13));