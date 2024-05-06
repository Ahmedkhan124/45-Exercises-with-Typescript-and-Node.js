// Exercise 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Declare the function
function make_shirt(size = 'large', text = 'I love typeScript') {
    console.log(`making a ${size} size shirt with the message ${text}`);
}
// calling the function
make_shirt();
make_shirt('medium');
make_shirt('small', 'i love python');
export {};
