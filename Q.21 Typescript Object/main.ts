// Exercise 21

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Data type of student object
interface data {
    name: string,
    roll_no: number,
    city: string,
    day: string,
    campus:string,
}

// student detail object
let studentInfo :data = {
    name: 'Ahmed khan',
    roll_no: 129270 ,
    city: 'karachi',
    day: 'wednesday',
    campus: 'main'
}
 console.log(studentInfo); //print studentInfo.


 // Data type of car object:
 interface car {
    maker: string,
    colour: string,
    model: number,
    automatic: boolean,
 }

 // car detail object.
 let car_info: car = {
    maker: "Land Cruiser",
    colour: "black",
    model: 2024,
    automatic: true,
 } 

 console.log(car_info) // print car_info.


