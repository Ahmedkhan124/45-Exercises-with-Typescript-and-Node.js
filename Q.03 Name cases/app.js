"use strict";
// Exercise 03
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Ahmed";
//lowercase.
console.log("lowercase:", personName.toLowerCase());
//uppercase.
console.log("uppercase:", personName.toUpperCase());
//titlecase.
console.log("titilecase:", personName.replace(/\bw/g, c => c.toLocaleUpperCase()));
