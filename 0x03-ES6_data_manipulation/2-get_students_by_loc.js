export default function getStudentByLocation(listOfStudents, city) {
  return Array.isArray(listOfStudents) ? listOfStudents
    .filter((student) => student.location === city) : [];
}
