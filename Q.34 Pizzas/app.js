// // Exercise 34.
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzaName = ['pepperoni', 'Chicken and Bacon Ranch', 'BBQ Chicken'];
// printing te name of pizza 
for (let i = 0; i < pizzaName.length; i++) {
    console.log(pizzaName[i]);
}
// printing sentence using the name of pizza.
for (let i = 0; i < pizzaName.length; i++) {
    console.log(`\nI like ${pizzaName[i]} pizza.`);
}
// printing line out side the for loop.
console.log('\nI really love pizza! Pizza is one of my favorite dish.It comes in a vatiety of flavours. It is originally from Italy and now eaten in most of the countries. There are many types of Pizzas with different flavors and tastes I love BBQ Chicken pizza with extra cheese.');
export {};
