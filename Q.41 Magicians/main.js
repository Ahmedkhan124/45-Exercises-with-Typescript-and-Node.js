// Exercise 41.
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// making an array.
let magicianNames = ['Shin Lim', 'Harry Houdni', 'Derren Brown', 'David Copperfield'];
// function declare show_magician to access the name in an array through the for (of) loop.
function show_magicians() {
    for (let i of magicianNames) {
        console.log(i);
    }
}
// calling the function
show_magicians();
export {};
