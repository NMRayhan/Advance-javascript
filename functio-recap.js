function calculateGrade(mark) {
    let result = " ";
    if (mark >= 0 && mark <= 32) {
        result = "F";
    } else if (mark >= 33 && mark <= 39) {
        result = "D";
    } else if (mark >= 40 && mark <= 49) {
        result = "C";
    } else if (mark >= 50 && mark <= 59) {
        result = "B";
    } else if (mark >= 60 && mark <= 69) {
        result = "A-"
    } else if (mark >= 70 && mark <= 79) {
        result = "A"
    } else if (mark >= 80 && mark <= 100) {
        result = "A+"
    } else {
        result = "Please input valid number not negative or more then 100";
    }
    return result
}
console.log(calculateGrade());