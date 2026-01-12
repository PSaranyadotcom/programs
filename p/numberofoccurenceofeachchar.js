let name1 = "saranya";

for (let i = 0; i < name1.length; i++) {
    let count = 0; // reset count for each character

    for (let j = 0; j < name1.length; j++) {
        if (name1[i] === name1[j]) {
            count++;
        }
    }

    console.log(name1[i] + " occurred " + count + " times");
}
