// Exercise 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// start with Exercise 16.
let guestList = ['Aslam', 'Aftab', 'Rashid', 'Ayesha'];
// for(let i = 0; i < guestList.length; i++){
//     console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
// }
let absentGuest = 'Aftab';
let newGuest = 'kamal';
guestList[1] = newGuest;
// for(let i = 0; i < guestList.length; i++){
//     console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
// }
console.log(`Mr.${absentGuest} is not coming for dinner.`);
console.log("\nGood news! we find a bigger dinner table so we are inviting three more guests.\n");
guestList.unshift('Atif'); // use unshift() method to add one guest to the begining of the array.
guestList.splice(3, 0, 'Ahmed'); // use splice() method to add one new guest to middle of the array.
guestList.push('jannat'); // use push() method to add new one guest to the end of the array.
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.", '\n\n'); // print message for invitation.
}
// sorry message to guest for not inviting for dinner.
console.log('\nSorry! we can not arrange big dinner table so only two people will be invited.\n');
// here i remove guest who are not invited for dinner.
while (guestList.length > 2) {
    let removeGuess = guestList.pop(); // pop method used to remove item to the end of the array.
    console.log(`Sorry Mr. ${removeGuess}, you are not invited for dinner\n`);
}
// remaining two names of guest in list.
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ",\n\n you are still invited on dinner tomorrow.\n\nThankyou.", '\n\n');
}
// remove all guest from the array.
guestList.splice(0, 2); // use splice() method to remove remaining two guest name from array list
console.log(guestList);
export {};
