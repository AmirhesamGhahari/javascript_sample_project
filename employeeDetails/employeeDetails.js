const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  ];

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>ROW ${index}: employee-id=${employee.id} employee-name=${employee.name} employee-age=${employee.age}  employee-department=${employee.department} employee-salary=$${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>employee-id=${employee.id} employee-name=${employee.name} employee-age=${employee.age}  employee-department=${employee.department} employee-salary=$${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById() {
    const inputId = document.getElementById('inputId').value;
    if (!inputId) { 
        alert(`please provide an employee ID.`);
        document.getElementById('employeesDetails').innerHTML = '';
        return;
    }

    const employeeId = parseInt(inputId, 3);
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>employee-id=${foundEmployee.id} employee-name=${foundEmployee.name} employee-age=${foundEmployee.age}  employee-department=${foundEmployee.department} employee-salary=$${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }