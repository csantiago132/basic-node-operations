const fs = require("fs");

//write out data
 const done = (output) => {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

//where we will store our commands 
 const evaluateCmd = (userInput) => {
   const userInputArray = userInput.split(' ');
   const command = userInputArray[0];

   switch(command){ 
     case 'echo':
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

 const commandLibrary = {
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
      let firstLinesOfFile = new Array();

      new Array(...sourceFile).slice(0, 6).forEach(content => {
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
      let lastLinesOfFile = new Array();

      new Array(...sourceFile).slice(-8, sourceFile.length).forEach(content => {
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
