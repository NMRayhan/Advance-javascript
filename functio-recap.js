let names = ['hablu', 'dablu', 'bablu', 'hablu', 'kablu', 'mablu', 'hablu', 'dablu', 'kablu']

function DoubleFinder(names) {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

console.log(DoubleFinder(names));