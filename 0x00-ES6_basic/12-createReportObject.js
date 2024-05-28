export default function createReportObject(employeeList) {
  const allEmployees = {};

  for (const key in employeeList) {
    if (Object.hasOwn(employeeList, key)) {
      allEmployees[key] = [...employeeList[key]];
    }
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
