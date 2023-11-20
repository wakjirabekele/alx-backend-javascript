/* Program named 1-stdin.js that will be executed through command line:
  It should display the message Welcome to Holberton School,
  what is your name ? (followed by a new line)
  The user should be able to input their name on a new line
  The program should display Your name is: INPUT
  When the user ends the program, it should display
  "This important software is now closing(followed by a new line)"
Requirements:
  Your code will be tested through a child process,
  make sure you have everything you need for that */

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
