/* Using the database database.csv.
    Create a function named countStudents.
    It should accept a path in argument (same as in 2-read_file.js)
    The script should attempt to read the database file asynchronously
    The function should return a Promise
    If the database is not available, it should throw an error
    with the text Cannot load the database
    If the database is available, it should log the following message
    to the console "Number of students: NUMBER_OF_STUDENTS"
    It should log the number of students in each field,
    and the list with the following format:
    Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    CSV file can contain empty lines (at the end)
    and they are not a valid student!
 */
const fs = require('fs');

/**
 * readData: reads the data and counts the
 * number of students in each field.
 * @param {list} data - list of students
 */
const readData = (data) => {
  const logs = [];
  const studentsArray = data.trim().split('\n').slice(1);

  const studentInfo = `Number of students: ${studentsArray.length}`;
  logs.push(studentInfo);
  console.log(studentInfo);

  const students = studentsArray.map((student) => {
    const fields = student.replace('\r', '').split(',');
    return fields;
  });

  const categories = [...new Set(students.map((student) => student[student.length - 1]))];

  categories.forEach((category) => {
    const filteredStudents = students.filter(
      (student) => student[student.length - 1] === category,
    ).map((student) => student[0]);

    const info = `Number of students in ${category
    }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`;
    logs.push(info);
    console.log(info);
  });

  return logs;
};

/**
 * countStudents - Reads the file asynchronously.
 * @param {string} database - path to database file
 * @returns promise
 */
const countStudents = (database) => {
  const readFilePromise = new Promise((resolve, reject) => {
    if (!database) {
      reject(new Error('Cannot load the database'));
    }
    fs.readFile(database, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        resolve(readData(data));
      }
    });
  });
  return readFilePromise;
};

module.exports = countStudents;
