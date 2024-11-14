const studentForm = document.getElementById("studentForm");

const nameInput = studentForm['name'];
const addressInput = studentForm['address'];
const ageInput = studentForm['age'];
const emailInput = studentForm['email'];
const StudentContainer = document.querySelector(".students");

const students=[
  {
    name:"Monicah",
    address:"limuru",
    age:30,
    email:"monmon@gmail.com"
  }
];

const addStudent = (name, address, age, email) => {

};
const createStudentElement = ({name, address, age, email}) => {
  const studentDiv = document.createElement('div');
  const studentName = document.createElement('h2');
  const studentAddress = document.createElement('p');
  const studentAge = document.createElement('p');
  const studentEmail = document.createElement('p');

  studentName.innerHTML="Student name: " + name;
  studentAddress.innerHTML="Student address: " + address;
  studentAge.innerHTML = "Student age: " + age;
  studentEmail.innerHTML="Student email: " + email;

  studentDiv.append(studentName, studentAddress, studentAge, studentEmail);
  StudentContainer.appendChild(studentDiv);
  
}

students.forEach(createStudentElement);