function getEmployeesBySalary(employees) {
  let arr = [];
  employees.forEach((element) => {
    if (element.salary > 60000) {
      arr.push(element);
    }
  });
  return arr;
}

function getEmployeesByDepartment(employees) {
  let arr = [];
  employees.forEach((element) => {
    if (element.department === 'IT') {
      arr.push(element);
    }
  });
  return arr;
}

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

console.log(getEmployeesBySalary(employees));
console.log(getEmployeesByDepartment(employees));
