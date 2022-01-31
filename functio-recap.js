function birthDate(dayOfWeek, day, month, year) {
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return daysOfWeek[dayOfWeek] + 'day,' + day + ' ' + months[month] + ' ' + year;
}

var date1 = new Date(2000, 0, 1);
console.log("Foo was Born on: " + birthDate(date1.getDay(), date1.getDate(), date1.getMonth(), date1.getFullYear()));