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
    case 'cat':
      commandLibrary.cat(userInputArray.slice(1));
      break;
    case 'head':
      commandLibrary.head(userInputArray.slice(1));
      break;
   }
 }

//where we will store the logic of our commands
 const commandLibrary = {
  // the echo command 
  'echo': (userInput) => {
    done(userInput);
  },

  'cat': (fullPath) => {
    const fileName = fullPath[0];
    fs.readFile(fileName, (error, data) => error ? console.error(error) : done(data));
  },

  'head': (fullPath) => {
    const fileName = fullPath[0];
    fs.readFile(fileName, (error, data) => {
      if (error) throw new Error(error);
      const sourceFile = data.toString().split('\n');
      const sourceFileToArray = [...sourceFile]
      let firstLinesOfFile = new Array();

      sourceFileToArray.forEach((content, index) => {
        firstLinesOfFile.push(sourceFileToArray[index])
      })

      data = firstLinesOfFile.join('\n').slice(0, 4);
      
      done(data);
    });
  },
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;
