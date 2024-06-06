interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting a director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string): Teacher | Director => {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director()
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

const isDirector = (employee: Teacher | Director): employee is Director => {
  return (employee as Director).workDirectorTasks != undefined;
};

function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));


type Subjects = 'Math' | 'History';

function teacherClass(todayClass: Subjects): string {
  if (todayClass == 'Math') {
    return 'Teaching Math';
  } else if (todayClass == 'History') {
    return 'Teaching History';
  }
}

console.log(teacherClass('Math'));
console.log(teacherClass('History'));
