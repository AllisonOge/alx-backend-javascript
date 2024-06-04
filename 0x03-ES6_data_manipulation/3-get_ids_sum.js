export default function getStudentIdsSum(listOfStudents) {
  return Array.isArray(listOfStudents) ? listOfStudents
    .reduce((prev, curr) => prev + curr.id, 0) : [];
}
