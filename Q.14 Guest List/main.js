// Exercise 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// storing the name of guests in a variable
let guestList = ['Aslam', 'Aftab', 'Rashid', 'Ayesha'];
// by using a for loop printing an invitation message to each guest'sname
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ",\n\n we invited you to on dinner tomorrow.\n\nThankyou.", '\n\n');
}
export {};
