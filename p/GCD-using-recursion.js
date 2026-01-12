function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

console.log("GCD of 36 and 60 is:", gcd(36, 60));
