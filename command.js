const fs = require("fs");

//write out data
 const done = (output) => {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

//where we will store our commands 
 const evaluateCmd = (userInput) => {
  //parses the user input to understand which command was typed
   const userInputArray = userInput.split(' ');
   const command = userInputArray[0];

   switch(command){ 
     case 'echo':
      //we will add the functionality of echo next within the object commandLibrary    
      commandLibrary.echo(userInputArray.slice(1).join(' '));
      break;
   }
 }

//where we will store the logic of our commands
 const commandLibrary = {
  // the echo command 
  'echo': (userInput) => {
    done(userInput);
  }
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;
