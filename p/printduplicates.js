let name1 = "saranyays";
let dcount = 0;
let printed = []; // to keep track of already printed duplicates

for (let i = 0; i < name1.length; i++) {
    let count = 0; // reset count for each character

    for (let j = 0; j < name1.length; j++) {
        if (name1[i] === name1[j]) {
            count++;
        }
    }

    // Check if character is duplicate and not already printed
    if (count > 1 && !printed.includes(name1[i])) {
        dcount++;
        console.log(name1[i] + " is a duplicate");
        printed.push(name1[i]); // mark as printed
    }
}

console.log("Total duplicate characters:", dcount);
