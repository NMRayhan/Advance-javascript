const student = {
    id : 2361,
    name : "Nur Mohammad",
    lastName : "Rayhan",
    totalCourse : 30,
    cgpa : 3.8,
    getCourse : function(course){
        return this.totalCourse -= course
    },
    getFullName : function(){
        return this.name + this.lastName;
    }
}
console.log(student.getFullName());
console.log(student.totalCourse);
console.log(student.getCourse(2));