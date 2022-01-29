function employee(name, jobTitle, born) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.born = born;
}
employee.prototype.salary = 20000;

const fred = new employee('fred flinstone', 'caveman', 1970);

console.log(fred);