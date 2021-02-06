const student = {
    id : 2361,
    name : "Nur Mohammad",
    lastName : "Rayhan",
    totalCourse : 30,
    cgpa : 3.8,
    getCourse : function(course){
        this.totalCourse = this.totalCourse - course
        return this.totalCourse;
    },
    getFullName : function(){
        return this.name + this.lastName;
    }
}
// console.log(student.getFullName());
// console.log(student.totalCourse);
// console.log(student.getCourse(2));

const myFriend = {
    name : "Ragvi Ahmed",
    totalCourse : 40,
    cgpa : 3.9
}

const myFriendCourse = student.getCourse.bind(myFriend)
console.log(myFriendCourse(4));