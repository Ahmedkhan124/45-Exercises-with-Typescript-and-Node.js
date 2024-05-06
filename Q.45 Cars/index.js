// Exercise 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// declare function to create a car object
function car(manufacturer, modelName, ...optional) {
    // initialize a car oject
    const carInfo = {
        manufacture: manufacturer,
        model: modelName,
        ...Object.assign({}, ...optional)
    };
    return carInfo;
}
// store the function in a variable 
let carInformation = car('Honda', 'Civic', { year: 2024 }, { color: 'white' }, { Options: ['Touchscreen', 'Child Door Locck', 'Driver-assistance feature', 'etc'] });
// printing the variable
console.log(carInformation);
export {};
