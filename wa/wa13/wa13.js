
console.log('Question 1');
const employees = [
  { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
  { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
  { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
];

console.log('Question 2');
const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: employees
};


const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
console.log(company);


console.log('Question 3');
const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log('Total Salary:', totalSalary);

console.log('Question 4');
function giveRaise(employees) {
  employees.forEach(employee => {
    if (employee.raiseEligible) {
      employee.salary *= 1.1; 
      employee.raiseEligible = false; 
    }
  });
}

giveRaise(company.employees);
console.log(company);

console.log('Question 5');
const workingFromHome = ['Anna', 'Sam'];

company.employees.forEach(employee => {
  employee.wfh = workingFromHome.includes(employee.firstName);
});

console.log(company);
