function points(twoPointers, threePointers) {
    let result = (twoPointers * 2) + (threePointers * 3);
    return result;
}

console.log(points(1, 1));

console.log(points(7, 5));

console.log(points(38, 8));

function dec2bin(dec1, dec2) {
    let first = (dec1 >>> 0).toString(2);
    let second = (dec2 >>> 0).toString(2);

    return first & second;
}

console.log(dec2bin(6,23));

function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}

console.log(bin2dec(111));