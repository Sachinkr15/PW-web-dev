//Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.


// The ternary operator in JavaScript is a concise way of writing conditional statements. It's a one-liner shorthand for an if-else statement and has the following syntax:


// syntax ->   condition ? expressionIfTrue : expressionIfFalse;    

// condition: A boolean expression that is evaluated.
// expressionIfTrue: The value or expression returned if the condition is true.
// expressionIfFalse: The value or expression returned if the condition is false.

const number = 10;
const result = number % 2 ==0 ? 'Even' : 'Odd'

console.log(`The number ${number} is ${result}`);

