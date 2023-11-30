// script.js


console.log('Question 1');
const employees = [
  { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
  { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
  { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
];

// Problem 2
console.log('Question 2');
const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: employees
};

// Adding a new employee
const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
console.log(company);

// Problem 3
console.log('Question 3');
// Calculate total salary for all company employees
const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log('Total Salary:', totalSalary);

// Problem 4
console.log('Question 4');
// Function to give a raise to eligible employees
function giveRaise(employees) {
  employees.forEach(employee => {
    if (employee.raiseEligible) {
      employee.salary *= 1.1; // Increase salary by 10%
      employee.raiseEligible = false; // Set eligibility to false
    }
  });
}

giveRaise(company.employees);
console.log(company);

// Problem 5
console.log('Question 5');
// Employees working from home
const workingFromHome = ['Anna', 'Sam'];

// Update the company JSON with 'wfh' property
company.employees.forEach(employee => {
  employee.wfh = workingFromHome.includes(employee.firstName);
});

console.log(company);
