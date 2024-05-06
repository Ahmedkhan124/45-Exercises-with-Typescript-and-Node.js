// Exercise 39.
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function declare
function city_country(city, country) {
    return `${city}, ${country}`; // return function
}
// calling the function
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Istanbol', 'Turkey'));
console.log(city_country('Beijing', 'China'));
export {};
