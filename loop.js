var user = 1;
while (user <= 10) {
    console.log("User Number " + user + ".");
    user = user + 1;
}
console.log("liver server on");
var finalNumber = 10;
for (let index = 1; index <= finalNumber; index++) {
    console.log("Number " + index);
}

var number = 20
for (let count = 0; count < number; count++) {
    if (count % 2 == 0) {
        console.log(count);
    }
}

var searchNumber = 6575;
var indexArray = [2, 3, 1, 5, 4, 54, 23, 65, 3443, 6575, 3, 3, 647, 35, 35, 46, 4, 52, 35, 353];
for (let count = 0; count < indexArray.length; count++) {
    const element = indexArray[count];
    console.log(element);
    if (searchNumber == element) {
        console.log(searchNumber + " found in " + indexArray.indexOf(searchNumber));
    }
}