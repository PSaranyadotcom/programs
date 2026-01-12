function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test
let year = 2024;
console.log(year, "is leap year?", isLeapYear(year)); 
