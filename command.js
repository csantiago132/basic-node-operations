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
    case 'tail':
      commandLibrary.tail(userInputArray.slice(1));
      break;
    default: 
      commandLibrary.errorHandler(userInputArray[0]);
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
      const sourceFileToArray = new Array(...sourceFile);
      let firstLinesOfFile = new Array();

      new Array(...sourceFileToArray).slice(0, 6).forEach(content => {
          firstLinesOfFile.push(content);
      });

      data = firstLinesOfFile.join('\n');
      done(data);
    });
  },

  'tail': (fullPath) => {
    const fileName = fullPath[0];
    fs.readFile(fileName, (error, data) => {
      if (error) throw new Error(error);
      const sourceFile = data.toString().split('\n');
      const sourceFileToArray = new Array(...sourceFile);
      let lastLinesOfFile = new Array();

      new Array(...sourceFileToArray).slice(-8, sourceFileToArray.length).forEach(content => {
        lastLinesOfFile.push(content);
      });

      data = lastLinesOfFile.join('\n');
      done(data);
    })
  },

  'errorHandler': (userInput) => {
    const errorHandler = `The "${userInput}" is not a command available on this program.`;
    done(errorHandler)
  }
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;
