// Exercise 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.      
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let place = ['Taj mahal', 'Moen jo Daro', 'Naran kaghan', 'Burj Khalifa', 'Amazon rain forest']; // five places for visit.
console.log('Original order: ', place); // array in its original order.
console.log('Alphabetical order: ', place.slice().sort()); // array in alphabetical order without modify the actual list.
console.log('Original order after sorting: ', place); // array is stll in its original order.
console.log('Reverse alphabetical order: ', place.slice().sort().reverse()); // array in reverse alphabetical order without changing the order of the original list.
console.log('Original order after reverse sorting: ', place); // array is still in its original order .
console.log('Reverse original order: ', place.reverse()); // reverse the order of list.
console.log('Back to original order: ', place.reverse()); // reverse the order of your list again to back its original order.
console.log('Sorted in alphabetical order: ', place.slice().sort()); // Sort array so it’s stored in alphabetical order.
console.log('Sorted in reverse alphabetiical order: ', place.slice().sort().reverse()); // sort to change an array store in alphabetical order.
export {};
