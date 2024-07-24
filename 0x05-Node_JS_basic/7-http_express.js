// 5-http.js
const fs = require('fs').promises;

const express = require('express');

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
        const total = `Number of students: ${students.length}`;
        let allMessage = '';
        for (const field in fields) {
          if (Object.hasOwnProperty.call(fields, field)) {
            const message = `Number of students in ${field}: ${fields[field].length}. `
                  + `List: ${fields[field].join(', ')}`;
            allMessage += `\n${message}`;
          }
        }
        const result = total + allMessage;
        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.status(500).send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
