const number = [2, 3, 4, 5, 6]

//1st Way
const newNumber = []
function doubleIt(number) {
    for (let i = 0; i < number.length; i++) {
        // const element = number[i]
        let result = number[i] * number[i];
        newNumber.push(result)
    }
    return newNumber;
}
const result = doubleIt(number);
console.log(result);

//2nd Way
const doubleNum = number.map(function (x) {
    return x * x
})
console.log(doubleNum);

//3rd Way
const result2 = number.map( x => x * x)
console.log(result2);


