// 5-http.js
const http = require('http');
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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.writeHead(404);
    res.end('Not foundx');
  }
});

app.listen(1245);

module.exports = app;
