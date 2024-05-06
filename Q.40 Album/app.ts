// Exercise 40.

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// function declare
function make_album(artist_name: string, album_title: string){
    return {artist_name, album_title}
}
// store a function in a variables and calling the function with different values
let album1 = (make_album('Atif aslam','Woh lamhe'));
let album2 = (make_album('Billie Eilish','Happier Than Ever'));
let album3 = (make_album('Jennifer Lopez','If You Had My Love'));
// print the variables 
console.log(album1);
console.log(album2);
console.log(album3);

// add an optional parameter to make_album to store the number of tracks on an album
function make_album1(artist_name: string, album_title: string,  number_of_tracks?: number){
    return {artist_name, album_title, number_of_tracks}
}
// again store a function in a variables and calling the function with different values
let album4 = (make_album1('Atif aslam','Woh lamhe', 34));
let album5 =(make_album1('Billie Eilish','Happier Than Ever', 45));
let album6 =(make_album1('Jennifer Lopez','If You Had My Love', 56));
// printing the variables
console.log(album4);
console.log(album5);
console.log(album6);


