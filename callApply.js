const student = {
    id : null,
    name : null,
    lastName : null,
    totalCourse : null,
    cgpa : null,
    getCourse : function(course){
        this.totalCourse = this.totalCourse - course
        return `total Completed Course : ${this.totalCourse}`;
    },
    getFullName : function(){
        return `Student Name : ${this.name} ${this.lastName}`;
    },
    getCgpa : function(){
        return `CGPA : ${this.cgpa}`;
    }
}
// console.log(student.getFullName());
// console.log(student.totalCourse);
// console.log(student.getCourse(2));
// console.log(student.getFullName());

const friendTamim = {
    name : "Ragvi Ahmed",
    lastName : "Tamim",
    totalCourse : 40,
    cgpa : 3.9
}

const friendChandan = {
    name : "Chandan",
    lastName : "Ojha",
    totalCourse : 50,
    cgpa : 4.0
}

//for Tamim
const tamimName = student.getFullName.bind(friendTamim);
console.log(tamimName());

const tamimCourse = student.getCourse.bind(friendTamim);
console.log(tamimCourse(5));

const tamimCgpa = student.getCgpa.bind(friendTamim);
console.log(tamimCgpa());

//Chadan
const chandanName = student.getFullName.bind(friendChandan);
console.log(chandanName());

const chandanCourse = student.getCourse.bind(friendChandan);
console.log(chandanCourse(10));

const chandanCgpa = student.getCgpa.bind(friendChandan);
console.log(chandanCgpa());