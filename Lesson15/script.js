function Human(fullName, age) {
  this.fullName = fullName;
  this.age = age;
}

function Employee(salary, department, experienceYear) {
  this.salary = salary;
  this.department = department;
  this.experienceYear = experienceYear;
}

const employee1 = new Employee(1000, "IT", 2);
Object.setPrototypeOf(employee1, new Human("Zakir Aliyev", 20));

const employee2 = new Employee(2000, "DESIGN", 4);
Object.setPrototypeOf(employee2, new Human("Gulcohohra Sultanova", 22));

const employee3 = new Employee(3000, "IT", 6);
Object.setPrototypeOf(employee3, new Human("Asma Aliyeva", 24));

const employee4 = new Employee(4000, "IT", 8);
Object.setPrototypeOf(employee4, new Human("Gunel Mizoeva", 26));

let array = [employee1, employee2, employee3, employee4];c

function average(array) {
  let sum = 0, count = 0;
  array.forEach(element => {
    if (element.department === "IT" && element.experienceYear > 5) {
      sum += element.salary;
      count++;
    }
  });
  return sum / count;
}

console.log(average(array));
