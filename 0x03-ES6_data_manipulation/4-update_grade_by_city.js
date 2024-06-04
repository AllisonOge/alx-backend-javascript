export default function updateStudentGraderByCity(listOfStudents, city, newGrades) {
  return Array.isArray(listOfStudents) ? listOfStudents
    .filter((student) => student.location === city)
    .map((obj) => {
      const newGrade = Array.isArray(newGrades) ? newGrades.filter(({ id }) => id === obj.id) : [];

      if (newGrade.length > 0) {
        return { ...obj, grade: newGrade[0] };
      }
      return { ...obj, grade: 'N/A' };
    }) : [];
}
