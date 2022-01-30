//fist create empty array for our created new array finding max and min number
// second we find max and min number in array using Math.max.apply() and Math.min.apply() builtin function 
//third we push our new element in empty array using push() method;
function minMax(arr) {
    let newArr = [];
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);

    newArr.push(min);
    newArr.push(max);
    
    return newArr;
}

console.log(minMax([1, 2, 3, 4, 5]));