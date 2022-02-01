let greeting = "Hello How Are You?"

function reverseString(text) {
    let reverseText = '';
    for (let character of text) {
        reverseText = character + reverseText;
    }
    return reverseText;
}
console.log(reverseString(greeting));