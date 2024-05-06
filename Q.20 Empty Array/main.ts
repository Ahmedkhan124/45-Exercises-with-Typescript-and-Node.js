// Exercise 20


// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


let programing_language: string[] = ['Typescript','Python', 'Javascript', 'C++', 'PHP']; // store programing languages name in a array.

console.log('List of programming lamguage:\n'); // printing the message before list.
for(let i = 0; i<programing_language.length; i++){
    console.log(programing_language[i]);
}