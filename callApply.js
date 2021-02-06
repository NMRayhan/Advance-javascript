const student = {
    id: null,
    fullNameArray: [
        firstName = null,
        lastName = null
    ],
    totalCourse: null,
    cgpa: null,
    versityName: null,
    getCourse: function (course) {
        this.totalCourse = this.totalCourse - course
        return `total Completed Course : ${this.totalCourse}`;
    },
    getCgpa: function (finalcgpa) {
        this.cgpa =  finalcgpa;
        return `CGPA : ${this.cgpa}`;
    },
    getWelcomeMsg: function (...fullName) {
        return `Hello ${fullName[0]} ${fullName[1]} welcome to ${this.versityName}`;
    },
    getFullName: function (...fullName) {
        return `Student Name : ${fullName[0]} ${fullName[1]}`;
    }
}

const friendTamim = {
    fullNameArray: [
        firstName = "Ragvi Ahmed",
        lastName = "Tamim",
    ],
    totalCourse: 40,
    cgpa: 3.9,
    versityName: "Daffodil International University"
}

const friendChandan = {
    fullNameArray: [
        ffirstName = "Chandan",
        lastName = "Ojha"
    ],
    totalCourse: 50,
    cgpa: 4.0,
    versityName: "American International University of Bangladesh"
}

//for Tamim
//apply()
const tamimFullName = student.getFullName.apply(friendTamim, friendTamim.fullNameArray);
console.log(tamimFullName);
const tamimWelcom = student.getWelcomeMsg.apply(friendTamim, friendTamim.fullNameArray)
console.log(tamimWelcom);
//bind()
const courseTamim = student.getCourse.bind(friendTamim);
console.log(courseTamim(5));
//call()
const cgpaTamim = student.getCgpa.call(friendTamim, friendTamim.cgpa);
console.log(cgpaTamim);


//for Chandan
//apply()
const chandanFullName = student.getFullName.apply(friendChandan, friendChandan.fullNameArray);
console.log(chandanFullName);
const chandanWelcom = student.getWelcomeMsg.apply(friendChandan, friendChandan.fullNameArray)
console.log(chandanWelcom);
//bind()
const courseChandan = student.getCourse.bind(friendChandan);
console.log(courseChandan(5));
//call()
const cgpaChandan = student.getCgpa.call(friendChandan, friendChandan.cgpa);
console.log(cgpaChandan);