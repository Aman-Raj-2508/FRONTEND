function Quadratic(a, b, c) {
    let sqrtVal = Math.sqrt(b * b - 4 * a * c);
    let root1 = (-b + sqrtVal) / (2 * a);
    let root2 = (-b - sqrtVal) / (2 * a);
    console.log(root1, root2);
}

Quadratic(2, 5, 3);