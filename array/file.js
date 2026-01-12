let a = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6];
let result = [];

for (let i = 0; i < a.length; i++) {
    let count = 0;

    // Count how many times a[i] appears in the array
    for (let j = 0; j < a.length; j++) {
        if (a[i] === a[j]) {
            count++;
        }
    }

    // If it appears exactly once and not already in result, add it
    if (count === 1 && !result.includes(a[i])) {
        result.push(a[i]);
    }
}

console.log(result); // [3, 4]
