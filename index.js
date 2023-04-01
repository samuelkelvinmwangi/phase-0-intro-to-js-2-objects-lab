function employees(name) {
  const employee = {};
  employee.name = 'Sam';
  employee.updateEmployeeWithKeyAndValue = function () {
    console.log( name) ;
  };
  return employee;
}