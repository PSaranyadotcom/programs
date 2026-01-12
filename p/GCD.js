function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let num1 = 36;
let num2 = 60;

console.log("GCD of", num1, "and", num2, "is:", gcd(num1, num2));
