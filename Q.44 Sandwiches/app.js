//Exercise 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// declare a function that accept array of item a person wants on a sandwich.
function Sandwiches(item) {
    console.log(`\nI want sandwich with: ${item}\n`);
    console.log('enjoy every sandwich');
}
// calling function  three times using a different number of arguments each time.
Sandwiches(['Ham', 'Lettuce', 'cheese']);
Sandwiches(['Tomato', 'Mayo', 'swiss', 'chicken']);
Sandwiches(['Butter', 'Jam', 'vegetables', 'beaf', 'chicken']);
export {};
