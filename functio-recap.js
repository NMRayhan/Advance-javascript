//degree to fahrenheit formula, degree * (9/5) + 32

function degreeToFahrenheit(degree) {
    const fixed = 9/5;
    return Math.ceil((degree * fixed) + 32);
}
console.log(degreeToFahrenheit(30));



// fahrenheit to degree formula = (fahrenheit - 32) * (5/9)
function fahrenheitToDegree(fahrenheit) {
    let result = Math.ceil((fahrenheit - 32) * (5 / 9));
    return result;
}
console.log(fahrenheitToDegree(10));