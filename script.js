const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector("students");
const nameInput = studentForm['name'];
const registrationInput = studentForm['registrationNumber'];
const ageInput = studentForm ['age'];

const student = [
  {
    name: "Monicah",
    registrationNumber: "F01/2024",
    age:27
  }
]

const createStudentElement =({name, registrationNumber, age})=>{
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentRegistration = document.createElement("p");
    const studentAge =  document.createElement("p");


    studentName.innerHTML = "Student name " + name;
    studentRegistration.innerHTML = "Student registration Number: " + registrationNumber;
    studentAge.innerHTML = "Student age " + age;

    studentDiv.append(studentName, studentRegistration, studentAge);
    studentContainer.appendChild(studentDiv)
    
}