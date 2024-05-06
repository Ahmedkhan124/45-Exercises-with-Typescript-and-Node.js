// Exercise 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define an array of magicianNames
let magicianNames = ['Shin Lim', 'Harry Houdni', 'Derren Brown', 'David Copperfield'];
//making copy of the original array
function copyArray(arr) {
    return [...arr];
}
// function declare make_great that modified the array of magiciansNames
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = 'The Great' + " " + magicians[i];
    }
}
// function declare with the name of show_magicians to access the name of the array of magiciansName
function show_magicians(magic) {
    for (let item of magic) {
        console.log(item);
    }
}
// store copyArray function in a variable
let copyMagicianArray = copyArray(magicianNames);
// calling the function make_great with a copy of the array of magiciansNames.
make_great(copyMagicianArray);
console.log('\nThis is my original array:');
show_magicians(magicianNames); // calling the function with original array
console.log('\nThis is my modified copy array:');
show_magicians(copyMagicianArray); // calling the function with modified copy array
export {};
