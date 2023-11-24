export class Person {
  constructor(id, name, address, email) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
  }
}

export class Student extends Person {
  constructor(id, name, address, email, math, physic, chemistry) {
    super(id, name, address, email);
    this.math = math;
    this.physic = physic;
    this.chemistry = chemistry;
  }
  calculateAvg() {
    return (this.math + this.physic + this.chemistry) / 3;
  }
}

export class Employee extends Person {
  constructor(id, name, address, email, workingDays, dailySalary) {
    super(id, name, address, email);
    this.workingDays = workingDays;
    this.dailySalary = dailySalary;
  }
  calculateSalary() {
    return this.workingDays * this.dailySalary;
  }
}

export class Customer extends Person {
  constructor(id, name, address, email, company, invoiceValue, rating) {
    super(id, name, address, email);
    this.company = company;
    this.invoiceValue = invoiceValue;
    this.rating = rating;
  }
}

export class ListPerson {
  constructor() {
    this.studentArr = new Array;
    this.employeeArr = new Array;
    this.customerArr = new Array;
  }
}




