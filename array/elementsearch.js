function add(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            console.log("element found");
            break;
        }
    }
    
}

add([2, 3, 4, 5], 2);
