function Human(firstname, lastname, age, isMale = true) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.isMale = isMale;

    this.getFullName = function () {
        let str = lastname.charAt(0).toUpperCase() + '.' + firstname.toUpperCase();
        this.fullName = str;
        return this.fullName;
    }

    this.getFullName();
}

function Student(university, faculty, major, degree, course, gpa = 0) {
    this.university = university;
    this.faculty = faculty;
    this.major = major;
    this.degree = degree;
    this.course = course;
    this.gpa = gpa;

    this.studentIDGenerate = function () {

        let universityCode = university.slice(0, 2).toUpperCase();
        let facultyCode = faculty.slice(0, 2).toUpperCase();
        let randomNumber = Math.floor(Math.random() * 9000) + 1000;
        let str = universityCode + "_" + facultyCode + randomNumber;

        this.studentID = str;
        return this.studentID;
    }

    this.studentIDGenerate();
}

const student1 = new Student("BDU", "IT", "PROGRAMMING", "BACHELOUR", 3, 9);
Object.setPrototypeOf(student1, new Human("Zakir", "Aliyev", 20));

const student2 = new Student("AZTU", "BIOLOGY", "ZOOLOGY", "MASTER", 2, 6);
Object.setPrototypeOf(student2, new Human("Gulchohra", "Sultanova", 19, false));

const student3 = new Student("WCU", "HISTORY", "GENERAL_HISTORY", "BACHELOUR", 4, 1);
Object.setPrototypeOf(student3, new Human("Gunel", "Mirzoeva", 24, false));

const student4 = new Student("BDU", "IT", "INFORMATION_SECURITY", "MASTER", 1, 7);
Object.setPrototypeOf(student4, new Human("Elmar", "Mamedov", 20));

const student5 = new Student("BDU", "HISTORY", "AZERBAIJAN_HISTORY", "BACHELOUR", 4, 2);
Object.setPrototypeOf(student5, new Human("Murad", "Adizade", 20));

let studentArray = [student1, student2, student3, student4, student5];

function searchStudent(studentArray) {
    let newStudentArray = [];
    studentArray.forEach(element => {
        if(element.gpa>3 && element.university.toLowerCase() === 'bdu' && element.faculty.toLowerCase() === ('it' || 'programming')) {
            newStudentArray.push(element);
        }
    });
    return newStudentArray;
} 

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

console.log(searchStudent(studentArray));