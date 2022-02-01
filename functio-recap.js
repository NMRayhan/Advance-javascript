function LargesElement(Numbers) {
    let largest = Numbers[0];
    for (let count = 0; count < Numbers.length; count++) {
        const element = Numbers[count];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

// console.log(LargesElement([-2,-4,-10,-65,-5]));
let largestArray = [10, 22, 3, 41, 5, 21, 6, 32, 45, 42, 45, 65, 63, 43, 5]
console.log(LargesElement(largestArray));