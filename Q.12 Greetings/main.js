// Exercise 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// storing the name of persons in a list of an array
let members = ["Ali", "Ahmed", "Aslam", "Asia", "Zainab"];
// printing a message to them
let message = "Hey everyone,hope you're all doing fine: ";
for (let i = 0; i < members.length; i++) {
    console.log(message + members[i]);
}
export {};
