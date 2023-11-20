/* Using the database database.csv,
  create a function countStudents in the file 2-read_file.js
    Create a function named countStudents. It should accept a path in argument
    The script should attempt to read the database file synchronously
    If the database is not available, it should throw an error
    with the text Cannot load the database
    If the database is available, it should log the following message
    to the console Number of students: NUMBER_OF_STUDENTS
    It should log the number of students in each field, and the list
    with the following format:
    "Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES"
    CSV file can contain empty lines (at the end)
    and they are not a valid student!
 */

const fs = require('fs');

const countStudents = (database) => {
  try {
    const data = fs.readFileSync(database, 'utf8');

    const studentsCount = data.trim().split('\n').slice(1);
    console.log(`Number of students: ${studentsCount.length}`);

    const students = studentsCount.map((student) => {
      const fields = student.replace('\r', '').split(',');
      return fields;
    });

    const categories = [...new Set(students.map((student) => student[student.length - 1]))];

    categories.forEach((category) => {
      const filteredStudents = students.filter(
        (student) => student[student.length - 1] === category,
      ).map((student) => student[0]);
      console.log(`Number of students in ${category
      }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
