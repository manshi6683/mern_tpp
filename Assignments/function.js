// Functions
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

// Functions

function describeCountry(country, population, capitalCity) {

    return country + " has " + population +
           " million people and its capital city is " +
           capitalCity;
}


// Function Calls

let country1 = describeCountry("India", 1400, "New Delhi");

let country2 = describeCountry("Finland", 6, "Helsinki");

let country3 = describeCountry("Japan", 125, "Tokyo");

console.log(country1);

console.log(country2);

console.log(country3);