// Exercise 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// making an array of favoiurite fruits
let favorite_fruits = ['apple', 'mango', 'banana'];
// writing five if statements. if the fruit is in an array, the if block should print a statement.
if (favorite_fruits.includes('apple')) {
    console.log('i really like an apple!');
}
if (favorite_fruits.includes('mango')) {
    console.log('i really like mango!');
}
if (favorite_fruits.includes('banana')) {
    console.log('i really like banana!');
}
if (favorite_fruits.includes('orange')) {
    console.log('i really like an orange!');
}
if (favorite_fruits.includes('peach')) {
    console.log('i really like peach!');
}
export {};
