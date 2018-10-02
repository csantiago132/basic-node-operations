// We output a prompt.
process.stdout.write('prompt > ');

// The stdin 'data' event triggers after a user types in a line.
process.stdin.on('data', (data) => {
  // We use trim() to remove the \n character at the end of data.
  const cmd = data.toString().trim();
  
  process.stdout.write(`You typed: ${cmd}`);
  process.stdout.write('\nprompt > ');
});