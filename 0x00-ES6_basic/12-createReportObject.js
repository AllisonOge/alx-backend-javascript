export default function createReportObject(employeeList) {
  const allEmployees = {};
  
  for (const key in employeeList) {
    allEmployees[key] = [...employeeList[key]];
  }
  
  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
