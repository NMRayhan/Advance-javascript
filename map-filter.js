const number = [4, 5, 6, 8, 4, 9]

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
const result2 = number.map(Element => Element * Element)
console.log(result2);

//filter
const bestNum = number.filter(Element => Element > 5)
console.log(bestNum);

// filter
const evenNumber = newNumber.filter(Element => Element % 2 == 0)
console.log(evenNumber);

//filter 
{
    let result = newNumber.filter(x => x > 20)
    console.log(result);
}

//find
{
    let result = newNumber.find(x => x > 20)
    console.log(result);
}