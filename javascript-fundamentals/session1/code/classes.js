class Employee {
  birthCity = "Sibiu";

  static createEmployees() {
    return [new Employee("John", 15), new Employee("Oana", 25)];
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.role = "Employee";
  }

  printInfo() {
    console.log(this.role + ", " + this.name + ", age: " + this.age);
  }
}

const employee = new Employee("Bob", 30);

employee.printInfo();

class OfficeEmployee extends Employee {
  #key = "ABCzxcv";

  // #getKey() {
  //   return this.#key;
  // }

  // publishKey() {
  //   console.log(this.#getKey());
  // }

  get publicKey() {
    return this.#key + "123412341234";
  }

  set publicKey(v) {
    console.log("setting key", v);
  }

  static createEmployees() {
    console.log("Creating employees");
    return super.createEmployees();
  }

  constructor(office, name, age) {
    super(name, age);

    this.role = "Office employee";
    this.office = office;
  }

  printInfo() {
    super.printInfo();
    console.log("Office: " + this.office);
  }
}

const officeEmployee = new OfficeEmployee("Endava Bucharest", "Alice", 20);

officeEmployee.printInfo();

console.log(Employee.createEmployees());
console.log(OfficeEmployee.createEmployees());
console.log(Object.getPrototypeOf(employee) === Employee.prototype);
console.log(Object.getPrototypeOf(OfficeEmployee) === Employee);

// console.log(officeEmployee.#key);
console.log(officeEmployee.publicKey);
officeEmployee.publicKey = "abc";
