export default function* createIteratorObject(report) {
  for (const key in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, key)) {
      for (const employee of report.allEmployees[key]) {
        yield employee;
      }
    }
  }
}
