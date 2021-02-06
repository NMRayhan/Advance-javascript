const student = {
    id : null,
    name : null,
    lastName : null,
    totalCourse : null,
    cgpa : null,
    versityName : null,
    getCourse : function(course){
        this.totalCourse = this.totalCourse - course
        return `total Completed Course : ${this.totalCourse}`;
    },
    getFullName : function(){
        return `Student Name : ${this.name} ${this.lastName}`;
    },
    getCgpa : function(){
        return `CGPA : ${this.cgpa}`;
    },
    getWelcomeMsg : function(fName,lName){
        return `Hello ${fName} ${lName} welcome to ${this.versityName}`;
    }
}

const friendTamim = {
    name : "Ragvi Ahmed",
    lastName : "Tamim",
    totalCourse : 40,
    cgpa : 3.9,
    versityName : "Daffodil International University"
}

const friendChandan = {
    name : "Chandan",
    lastName : "Ojha",
    totalCourse : 50,
    cgpa : 4.0,
    versityName : "American International University of Bangladesh"
}

//for Tamim
const tamimName = student.getFullName.bind(friendTamim);
console.log(tamimName());

const tamimCourse = student.getCourse.bind(friendTamim);
console.log(tamimCourse(5));

const tamimCgpa = student.getCgpa.bind(friendTamim);
console.log(tamimCgpa());
//for Tamim call() function
const welcomeMsgforTamim = student.getWelcomeMsg.call(friendTamim, friendTamim.name,friendTamim.lastName)
console.log(welcomeMsgforTamim);

//Chadan
const chandanName = student.getFullName.bind(friendChandan);
console.log(chandanName());

const chandanCourse = student.getCourse.bind(friendChandan);
console.log(chandanCourse(10));

const chandanCgpa = student.getCgpa.bind(friendChandan);
console.log(chandanCgpa());

const welcomeMsgforChandan = student.getWelcomeMsg.call(friendChandan, friendChandan.name,friendChandan.lastName)
console.log(welcomeMsgforChandan);