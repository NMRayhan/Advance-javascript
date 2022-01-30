/*
function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(year + " is leap year");
            } else {
                console.log(year + " is not a leap year");
            }
        } else {
            console.log(year + " is leap year");
        }
    } else {
        console.log(year + " is not a leap year");
    }
}

isLeapYear(2300);
*/


function factorialFinder(number) {
    var factorial = 1
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factorialFinder(6));