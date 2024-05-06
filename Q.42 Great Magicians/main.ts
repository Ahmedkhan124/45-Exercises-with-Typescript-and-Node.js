// Exerise 42

// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// define an array of magicianName.
let magicianNames:string[] = ['Shin Lim', 'Harry Houdni','Derren Brown', 'David Copperfield']; 

// function declare make_great that modifies the array of magiciansName by adding the phrase (The Great) to each magician’s name
function make_great(magicians: string[]){
    for( let i = 0; i < magicians.length; i ++){
      magicianNames[i] = ('The Great' + " " + magicians[i]);
    }
}

// function declare show_magician 
function show_magicians(){
    for(let item of magicianNames){
        console.log(item);
    }
}
// calling the function
make_great(magicianNames);
show_magicians();


