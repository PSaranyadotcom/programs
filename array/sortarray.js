let arr1=[2,6,10,7]
for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}

console.log(arr1); 

let arr=[2,6,10,7]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr); 