const singara = 10;

function singaraNiyeAy(taka, count) {
    console.log("Chaca Singara Den ");
    var totalTaka = (taka / singara) * count;

    return (taka - totalTaka);
}

var finalTaka = singaraNiyeAy(100, 4);
console.log(finalTaka);

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
}

var result = addNumber(5, 4);
console.log(result);

let x ='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quasi?';
let y = 'Lorem';
 console.log(x.localeCompare(y));
let b = x.match(y);
console.log(b);
console.log(b.length);