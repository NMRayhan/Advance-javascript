const person = [
    {id: 23, name: "Shahin"},
    {id: 22, name: "tarek"},
    {id: 06, name: "nazim"},
    {id: 01, name: "Arif"}
]
//1st way
const allName = []
for (let i = 0; i < person.length; i++) {
    const PersonName = person[i].name
    allName.push(PersonName)
}
console.log(allName);
//2nd way
const names = person.map( x => x.name)
console.log(names);

//2nd Way
{
    const ids = person.map( x => x.id);
    console.log(ids);
}

//3rd Way
{
    const result = person.filter(x => x.id < 20 )
    console.log(result);
}

