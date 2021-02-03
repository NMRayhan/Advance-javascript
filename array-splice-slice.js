numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const part = numbers.slice(2,5);
console.log(part);
console.log(numbers);

const removed = numbers.splice(2,5,33,44,55,66,77)
console.log(removed);
console.log(numbers);