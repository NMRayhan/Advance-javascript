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


// function factorialFinder(number) {
//     var factorial = 1
//     for (let i = number; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// console.log(factorialFinder(6));


// function factorialFind(fact) {
//     var i = 1;
//     let number = 1;
//     while (i <= fact) {
//         number = number * i;
//         i++;
//     }
//     return number;
// }

// console.log(factorialFind(5));

function pizzaPanda(foodName, quantity) {
    if (foodName.toLowerCase() == "pizza") {
        var price = 10;
        let total = price * quantity;
        var message = "Your Order, " + quantity + " " + foodName.toLowerCase() + " and total you pay $" + total;
        return message;
    } else {
        return "You have choice wrong food, please select only pizza";
    }

}


console.log(pizzaPanda("PIzza", 5));