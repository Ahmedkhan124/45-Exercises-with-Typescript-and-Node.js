// // Exercise 16:
// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // * Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.


// // * Add one new guest to the beginning of your array.
// // * Add one new guest to the middle of your array. 
// // • Use append() / push() to add one new guest to the end of your list. 
// // • Print a new set of invitation messages, one for each person in your list.


// start with the program from exercise 15.

let guestList: string[] = ['Aslam', 'Aftab', 'Rashid','Ayesha'];
// for(let i = 0; i < guestList.length; i++){
//     console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
// }

let absentGuest: string = 'Aftab';

let newGuest: string = 'kamal';

guestList[1] = newGuest;
for(let i = 0; i < guestList.length; i++){
    console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
}

console.log(`Mr.${absentGuest} is not coming for dinner.`);

console.log("\nGood news! we find a bigger dinner table so we are inviting three more guests.\n"); // message to informing people that found a bigger dinner table.

guestList.unshift('Atif');       // use unshift() method to add one guest to the begining of the array.
guestList.splice(3, 0 ,'Ahmed'); // use splice() method to add one new guest to middle of the array.
guestList.push('jannat');        // use push() method to add new one guest to the end of the array.

for(let i = 0; i < guestList.length; i++){
    console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');  // print new set of invitation message
}






