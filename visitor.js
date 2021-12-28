class Employee {
  constructor(name, salary, vacationDays) {
    this.name = name;
    this.salary = salary;
    this.vacationDays = vacationDays;
  }

  accept(visitor) {
    visitor.visit(this);
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getVacationDays() {
    return this.vacationDays;
  }

  setVacationDays(days) {
    this.vacationDays = days;
  }
}

class Salary {
  visit(employee) {
    employee.setSalary(employee.getSalary() * 10.1);
  }
}

class Vacation {
  visit(employee) {
    employee.setVacationDays(employee.getVacationDays() + 2);
  }
}

const employees = [
  new Employee("Joe", 100000, 12),
  new Employee("Jane", 200000, 38),
  new Employee("Mark", 150000, 41),
];

const visitorSalary = new Salary();
const visitorVacation = new Vacation();

for (let i = 0, len = employees.length; i < len; i++) {
  const employee = employees[i];

  employee.accept(visitorSalary);
  employee.accept(visitorVacation);

  console.log(
    `emp.getName() earns $${employee.getSalary()} and gets ${employee.getVacationDays()} vacation days`
  );
}
