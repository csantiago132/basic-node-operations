const command = require("./command.js");

// We output a prompt.
process.stdout.write('prompt > ');

// The stdin 'data' event triggers after a user types in a line.
process.stdin.on('data', (userInput) => {
  // We use trim() to remove the \n character at the end of data.
  userInput = userInput.toString().trim();
  
  command.evaluateCmd(userInput);
});