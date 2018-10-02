const fs = require("fs");

//write out data
 const done = (output) => {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

//where we will store our commands
 const evaluateCmd = (userInput) => {
  //parses the user input to understand which command was typed
   const userInputArray = userInput.split(" ");
   const command = userInputArray[0];
 }

//where we will store the logic of our commands
 const commandLibrary = {
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;
