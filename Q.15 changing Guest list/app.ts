// Exercise 15:

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// * Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// * Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// * Print a second set of invitation messages, one for each person who is still in your list.



let guestList: string[] = ['Aslam', 'Aftab', 'Rashid','Ayesha'];
for(let i = 0; i < guestList.length; i++){
    console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
}

let absentGuest: string = 'Aftab'; 
let newGuest: string = 'kamal';

guestList[1] = newGuest; // repalce the name of guest who can't make it dinner with the new person who is invite.
for(let i = 0; i < guestList.length; i++){
    console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.",'\n\n');
}

console.log(`Mr. ${absentGuest} is not coming for dinner.`); // printing a message to a person who cant't make it for dinner.


