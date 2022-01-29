const singara = 10;

function singaraNiyeAy(taka,count){
    console.log("Chaca Singara Den ");
    var totalTaka = (taka / singara)*count;
    
    return (taka - totalTaka);
}

var finalTaka = singaraNiyeAy(100,4);
console.log(finalTaka);