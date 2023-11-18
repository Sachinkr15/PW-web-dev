//Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.



const weight = 71    // in kg
const height = 1.7   //in metre

const calculateBMI =  weight /(height * height)
console.log(calculateBMI);
console.log(calculateBMI.toFixed(2));  //getting only two values after decimal.