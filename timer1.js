"use strict";

const alarm = function (arr, callback) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] >= 0 && !isNaN(Number(arr[i]))) {
      setTimeout(() => {
        callback();
      }, Number(arr[i]) * 1000)
    }
  }
}

alarm(process.argv.slice(2), () => {
  process.stdout.write('\x07');
});