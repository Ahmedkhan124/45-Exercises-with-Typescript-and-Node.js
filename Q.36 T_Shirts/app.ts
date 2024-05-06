// Exercise 36.

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function declare
function make_shirt(size: string, text: string){

    console.log(`making a ${size} size of the shirt with the message ${text}`);
}
// call the function
make_shirt('large','coding is love');
make_shirt('medium','hello world');
make_shirt('small','dive into the coding');
