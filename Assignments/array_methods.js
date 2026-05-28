// Basic Array Operations (Methods)
// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.



// Basic Array Operations (Methods)

// Neighbours array

let neighbours = ["Pakistan", "China", "Nepal"];


// Add 'Utopia' to the end

neighbours.push("Utopia");

console.log(neighbours);


// Remove 'Utopia' from the end

neighbours.pop();

console.log(neighbours);


// Check for Germany

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central european country :D");
}


// Change one neighbour country name

let index = neighbours.indexOf("China");

neighbours[index] = "People's Republic of China";

console.log(neighbours);