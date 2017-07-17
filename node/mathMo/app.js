var mathlib = require('./library/mathlib.js')();     //notice the extra invocation parentheses!
console.log(mathlib);

console.log('The sum of the add method: ',mathlib.add(2,3));
console.log('The sum of the multiply method: ',mathlib.multiply(3,5));
console.log('The sum of the square method: ',mathlib.square(5));
console.log('The random number between 1 and 35: ',mathlib.random(1,35));