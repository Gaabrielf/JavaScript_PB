var myArgs = process.argv;

if (process.argv.length === 2) {
    console.log('Hello world');
  }
  else if (process.argv.length > 2) {
     console.log('Hello ' + myArgs[2]);
  }