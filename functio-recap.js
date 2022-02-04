let str = "MoHaMMad";

function stringChanger(text) {
    let upperCase = 0;
    let lowerCase = 0;
    for (const letter of text) {
        if (letter == letter.toUpperCase()) {
            upperCase = upperCase + 1;
        } else {
            lowerCase = lowerCase + 1;
        }
    }
    if (upperCase > lowerCase) {
        return text.toUpperCase();
    } else if(upperCase < lowerCase) {
        return text.toLowerCase();
    } else {
        return text;
    }
}

console.log(stringChanger(str));