const mymodule =  require('./mymodule');
const ranges = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold = 5;

console.log(mymodule(ranges, threshold));