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
    if(foodName.toLowerCase() == 'pizza'){
        let pizzaPrice = 20;
        let total = pizzaPrice * quantity;
        var massage = "Order confirm, "+quantity+" "+foodName+" total $"+total;
        return massage;
    }
    else if(foodName.toLowerCase() == 'burger'){
        let burgerPrice = 15;
        let total = burgerPrice * quantity;
        var massage = "Order confirm, "+quantity+" "+foodName+" total $"+total;
        return massage;
    }
    else{
        return "Sorry, we sell only pizza and burger"
    }

}


console.log(pizzaPanda("pizza", 3));