// function sum() {
//     console.log(arguments[3]);
//     console.log(typeof arguments);
// }
// sum(1, 2, 3, 4, 5, 6)

function stopWatch() {
    let count = 0;
    return function () {
        count++
        return count;
    }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());