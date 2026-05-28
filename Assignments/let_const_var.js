// let, const and var
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

// let, const and var

const country = "India";
const continent = "Asia";
let population = 1400;

let language = "Hindi";

console.log(language);

// Changing a let variable works
population = 1401;
console.log(population);

// Trying to change a const variable
// country = "USA";   // Error

// This will give:
// TypeError: Assignment to constant variable.