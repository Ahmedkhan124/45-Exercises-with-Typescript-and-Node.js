// Exercise 24.

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let car: string = 'civic';
let result:number = 20;
let fruits: string[] = ['apple', 'mango', 'orange', 'banana'];

// • Tests for equality and inequality with strings:

// • Tests for equality 1.
console.log('equality test with string: ', car == 'civic');

// • Tests for equality 2.
console.log('equality test with string: ', car == 'Toyota Corola');

// • Tests for inequality 1.
console.log('inequality test with string: ', car != 'Alto');

// • Tests for inequality 2.
console.log('inequality test with string: ', car != 'civic');

// • Tests using the lower case function: 

// • Test using lower case 1.
console.log('lower case function test: ', car.toLowerCase() ==='civic');

// • Test using lower case 2.
console.log('lower case function test: ', car.toLowerCase() !== 'civic');


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:

// • Numerical tests involving equality 1.
console.log('equality test with numbers: ', result === 20);

// • Numerical tests involving equality 2.
console.log('equality test with numbers: ', result === 10);

// • Numerical tests involving iequality 1.
console.log('inequality test with numbers: ', result !== 30);

// • Numerical tests involving iequality 2.
console.log('inequality test with numbers: ', result !== 20);

// • Numerical tests involving greator than 1.
console.log('greator than test with numbers: ', result > 8);

// • Numerical tests involving greator than 2.
console.log('greator than test with numbers: ', result > 50);

// • Numerical tests involving less than 1.
console.log('less than test with numbers: ', result < 25);

// • Numerical tests involving less than 2.
console.log('less than test with numbers: ', result < 5);

// • Numerical tests involving greator than or equal to 1.
console.log('greator than and equal to test with numbers: ', result >= 8);

// • Numerical tests involving greator than or equal to 2.
console.log('greator than and equal to test with numbers: ', result >= 40);

// • Numerical tests involving less than or equal to 1.
console.log('less than and equal to test with numbers: ', result <= 50);

// • Numerical tests involving less than or equal to 2.
console.log('less than and equal to test with numbers: ', result <= 5);


// • Tests using "and" and "or" operators:

// • Tests using "and" operator 1.
console.log('and operator test: ', 30 === 30 && 50 > 20);

// • Tests using "and" operator 2.
console.log('and operator test: ', 20 >= 10 && 50 <= 20);

// • Tests using "or" operators: 1.
console.log('or operator test: ', 70 >= 10 || 20 > 90);

// • Tests using "or" operators: 2.
console.log('or operator test: ', 20 <= 10 || 50 < 20);


// • Test whether an item is in a array:

// Test an item in an array 1.
console.log('test an item in an array: ', fruits.includes('apple'));

// Test an item in an array 2.
console.log('test an item in an array: ', fruits.includes('grapes'));

































