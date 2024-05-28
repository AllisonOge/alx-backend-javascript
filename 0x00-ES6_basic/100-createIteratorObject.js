export default function* createIteratorObject(report) {
  for (let key in report.allEmployees) {
    for (let employee of report.allEmployees[key]) {
      yield employee;
    }
  }
}
