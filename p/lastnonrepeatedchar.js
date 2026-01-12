let name1 = "saranya";
let firstNonRepeating = null;

for (let i = name1.length-1; i >= 0; i--) {
    let count = 0; // reset count for each character

    for (let j = 0; j < name1.length; j++) {
        if (name1[i] === name1[j]) {
            count++;
        }
    }

    if (count === 1) {
        firstNonRepeating = name1[i];
        break; // stop at the first non-repeating character
    }
}

if (firstNonRepeating) {
    console.log("First non-repeating character is:", firstNonRepeating);
} else {
    console.log("No non-repeating character found");
}
