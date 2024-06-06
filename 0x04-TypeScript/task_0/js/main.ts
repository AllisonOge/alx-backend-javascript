interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Betty',
  lastName: 'Holberton',
  age: 20,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'Kimba',
  lastName: 'Checker',
  age: 2,
  location: 'ALX',
};

const studentsList: Array<Student> = [student1, student2];

/* Vanilla javascript */
console.log('firstname location');
studentsList.forEach((student) => {
  console.log(`${student.firstName} ${student.location}`);
});
