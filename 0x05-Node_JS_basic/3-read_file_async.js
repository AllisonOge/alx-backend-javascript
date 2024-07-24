const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((payload) => {
        const lines = payload.trim().split('\n');
        const header = lines.shift(); // eslint-disable-line no-unused-vars
        const students = [];
        const fields = {};

        lines.forEach((line) => {
          if (line.trim() !== '') {
            const [firstname,,, field] = line.split(',');
            students.push({ firstname, field });

            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        });
        // print the number of students
        console.log(`Number of students: ${students.length}`);
        for (const field in fields) {
          if (Object.hasOwnProperty.call(fields, field)) {
            const message = `Number of students in ${field}: ${fields[field].length}. `
                  + `List: ${fields[field].join(', ')}`;
            console.log(message);
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
