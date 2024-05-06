//  Exercise 19.

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Start with exercise 17:
let guestList: string[] = ['Aslam', 'Aftab', 'Rashid','Ayesha'];
// for(let i = 0; i < guestList.length; i++){
//     console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
// }

let absentGuest: string = 'Aftab';

let newGuest: string = 'kamal';

guestList[1] = newGuest;
// for(let i = 0; i < guestList.length; i++){
//     console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
// }

// console.log(`Mr.${absentGuest} is not coming for dinner.`);

// console.log("\nGood news! we find a bigger dinner table so we are inviting three more guests.\n");

guestList.unshift('Atif');       // use unshift() method to add one guest to the begining of the array.
guestList.splice(3, 0 ,'Ahmed'); // use splice() method to add one new guest to middle of the array.
guestList.push('jannat');        // use push() method to add new one guest to the end of the array.

// for(let i = 0; i < guestList.length; i++){
    // console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n'); // print message for invitation.
// }
// // sorry message to guest for not inviting to dinner.
// console.log('\nSorry! we can not arrange big dinner table so only two people will be invited.\n');

// here i remove guests who are not invited for dinner.
while(guestList.length > 2){
 let removeGuess = guestList.pop();  // pop method used to remove item to the end of the array.
//  console.log(`Sorry Mr. ${removeGuess}, you are not invited for dinner\n`);
 
}
// remaining two names of guest in list.
// for(let i = 0; i < guestList.length; i++){
//     console.log("Respected Sir/Madam " + guestList[i] + ",\n\n you are still invited on dinner tomorrow.\n\nThankyou.",'\n\n');
// }
// remove all guest from the array.
guestList.splice(0 , 2); // use splice() method to remove remaining two guest name from array list
console.log(guestList);


console.log(`Total number of guests are: ${guestList.length}`); // a message indicating the number of people are inviting to dinner.