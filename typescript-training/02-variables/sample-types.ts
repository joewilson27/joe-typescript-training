let found: boolean = false;
let grade: number = 88.6;
let firstName: string = "Joe";
let lastName: string = 'Wilson';

// let's break it!
/*
found = 0;
grade = "joe";
*/

console.log(found);
console.log("The grade is " + grade);

console.log("Hi " + firstName + " " + lastName);

// use template strings
console.log(`Hi ${firstName} ${lastName}`); // template string use backticks. This is useful for long string