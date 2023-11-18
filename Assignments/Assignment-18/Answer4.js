//Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.


const userAge = 22
const userEligible = userAge > 18 ? 'eligible to vote' : ' not eligible to vote'
console.log(`The userage is ${userAge} so you are ${userEligible}`);
