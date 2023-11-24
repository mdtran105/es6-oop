import { Customer, Employee, Student, ListPerson } from './model.js';
import { displayTable } from './controller.js';

const getEle = (selector) => document.querySelector(selector);

const formModal = document.querySelector('#personForm');
$('#myModal').on('hidden.bs.modal', () => {
  formModal.reset();
});

const academyList = new ListPerson;
academyList.studentArr = JSON.parse(localStorage.getItem('Student_Academy_Local')) || [];
academyList.employeeArr = JSON.parse(localStorage.getItem('Employee_Academy_Local')) || [];
academyList.customerArr = JSON.parse(localStorage.getItem('Customer_Academy_Local')) || [];

export default academyList;

if (academyList.studentArr.length) {
  academyList.studentArr = academyList.studentArr.map(item => new Student(
    item.id,
    item.name,
    item.address,
    item.email,
    item.math,
    item.physic,
    item.chemistry
  ));
}

if (academyList.employeeArr.length) {
  academyList.employeeArr = academyList.employeeArr.map(item => new Employee(
    item.id,
    item.name,
    item.address,
    item.email,
    item.workingDays,
    item.dailySalary
  ));
}

if (academyList.customerArr.length) {
  academyList.customerArr = academyList.customerArr.map(item => new Customer(
    item.id,
    item.name,
    item.address,
    item.email,
    item.company,
    item.invoiceValue,
    item.rating
  ));
}

const getInfoFromForm = (type) => {
  let person = {};
  const elements = document.querySelectorAll('#personForm input');
  elements.forEach((element) => {
    const { name, value } = element;
    person[name] = value;
  });
  if (type === 'student') {
    return new Student(
      person.id,
      person.name,
      person.address,
      person.email,
      person.math,
      person.physic,
      person.chemistry
    );
  } else if (type === 'employee') {
    return new Employee(
      person.id,
      person.name,
      person.address,
      person.email,
      person.workingDays,
      person.dailySalary
    );
  } else {
    return new Customer(
      person.id,
      person.name,
      person.address,
      person.email,
      person.company,
      person.invoiceValue,
      person.rating
    );
  }
};

const saveInfo = (type, person) => {
  if (type === 'student') {
    academyList.studentArr.push(person);
    localStorage.setItem('Student_Academy_Local', JSON.stringify(academyList.studentArr));
    displayTable(type, academyList.studentArr);
  } else if (type === 'employee') {
    academyList.employeeArr.push(person);
    localStorage.setItem('Employee_Academy_Local', JSON.stringify(academyList.employeeArr));
    displayTable(type, academyList.employeeArr);
  } else {
    academyList.customerArr.push(person);
    localStorage.setItem('Customer_Academy_Local', JSON.stringify(academyList.customerArr));
    displayTable(type, academyList.customerArr);
  }
};

window.addPerson = (type) => {
  const person = getInfoFromForm(type);
  saveInfo(type, person);
};

window.deletePerson = (type, id) => {
  if (type === 'student') {
    academyList.studentArr = academyList.studentArr.filter(person => person.id != id);
    localStorage.setItem('Student_Academy_Local', JSON.stringify(academyList.studentArr));
    displayTable(type, academyList.studentArr);
  } else if (type === 'employee') {
    academyList.employeeArr = academyList.employeeArr.filter(person => person.id != id);
    localStorage.setItem('Employee_Academy_Local', JSON.stringify(academyList.employeeArr));
    displayTable(type, academyList.employeeArr);
  } else {
    academyList.customerArr = academyList.customerArr.filter(person => person.id != id);
    localStorage.setItem('Customer_Academy_Local', JSON.stringify(academyList.customerArr));
    displayTable(type, academyList.customerArr);
  }
};

let idPersonEdited = null;
window.editPerson = (type, id) => {
  idPersonEdited = id;
  if (type === 'student') {
    const person = academyList.studentArr.find(person => person.id === id);
    getEle('#id').value = person.id;
    getEle('#name').value = person.name;
    getEle('#email').value = person.email;
    getEle('#address').value = person.address;
    getEle('#math').value = person.math;
    getEle('#physic').value = person.physic;
    getEle('#chemistry').value = person.chemistry;
  } else if (type === 'employee') {
    const person = academyList.employeeArr.find(person => person.id === id);
    getEle('#id').value = person.id;
    getEle('#name').value = person.name;
    getEle('#email').value = person.email;
    getEle('#address').value = person.address;
    getEle('#workingDays').value = person.workingDays;
    getEle('#dailySalary').value = person.dailySalary;
  } else {
    const person = academyList.customerArr.find(person => person.id === id);
    getEle('#id').value = person.id;
    getEle('#name').value = person.name;
    getEle('#company').value = person.company;
    getEle('#email').value = person.email;
    getEle('#address').value = person.address;
    getEle('#invoiceValue').value = person.invoiceValue;
    getEle('#rating').value = person.rating;
  }
};

window.updatePerson = (type) => {
  const person = getInfoFromForm(type);
  if (type === 'student') {
    const index = academyList.studentArr.findIndex(item => item.id === person.id);
    academyList.studentArr[index] = person;
    localStorage.setItem('Student_Academy_Local', JSON.stringify(academyList.studentArr));
    displayTable(type, academyList.studentArr);
  } else if (type === 'employee') {
    const index = academyList.employeeArr.findIndex(item => item.id === person.id);
    academyList.employeeArr[index] = person;
    localStorage.setItem('Employee_Academy_Local', JSON.stringify(academyList.employeeArr));
    displayTable(type, academyList.employeeArr);
  } else {
    const index = academyList.customerArr.findIndex(item => item.id === person.id);
    academyList.customerArr[index] = person;
    localStorage.setItem('Customer_Academy_Local', JSON.stringify(academyList.customerArr));
    displayTable(type, academyList.customerArr);
  }
};