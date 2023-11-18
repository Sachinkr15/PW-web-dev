//Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if the number is positive and similarly for negative and zero also.


const number = 15;
const result = number > 0 ? 'positive' : number < 0 ? 'Negative' : 'Zero'
console.log(`The number ${number} is ${result}`);
