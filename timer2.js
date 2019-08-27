"use strict";
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (Number(key) >= 1 && Number(key) <= 9) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000)
  }
  
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

});