// Log to console
console.log('Log to console');
console.log(321);
console.log(true);
var greeting = 'Bad Boy';
console.log(greeting);
console.log([1, 2, 3, 4, 5]);
console.log({ a: 1, b: 2, c: 3 });
console.table({ a: 1, b: 2, c: 3 });

console.error('This is an error');
console.clear();
console.warn('This is a warning!!');

/*
  multi
  line
  comments
*/

// // Variables
// var, let, const
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

// Variables can have letters, numbers, _, $
// Cannot start with a number

// Multi word variables
var fName = 'Cameron'; // Camel case
var first_name = 'Mason'; // Underscore
var fName = 'Darius'; // Pascal case

// LET
let name2;
name2 = 'John Doe';
console.log(name2);
name2 = 'Steve Smith';
console.log(name2);

//CONST;
const name3 = 'Liam';
console.log(name3);
// cannot reassign
//name3 = 'Cameron';
// Have to assign a value
//const greeting;

const person = {
  name: 'Cam',
  age1: 44,
};

person.name = 'Pae';
person.age1 = 38;

console.log(person);

const num = [1, 2, 3, 4, 5];
num.push(6, 7);

console.log(num);

// Primitive

// String
const name1 = 'John Doe';
// Number
const age2 = 44;
// Booleon
const hasKids = true;
// Null
const bike = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof name1);
console.log(typeof age2);
console.log(typeof hasKids);
console.log(typeof bike);
console.log(typeof test);
console.log(typeof sym);

// Reference Types - Objects
// Array
const hobbies = ['waka ama', 'crossfit', 'kapa haka'];
// Object Literal
const address = {
  city: 'Hamilton',
  suburb: 'Hamilton East',
};
const today = new Date();

console.log(typeof hobbies);
console.log(typeof address);
console.log(typeof today);

// Type Conversion

let val;

// Number to String
val = String(555);
val = String(4 + 4);
// Bool to String
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers)

// Numbers & The Math Object
const num1 = 100;
const num2 = 50;
//let val;

// Simple Math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 23, 56, 2, 8, 45, 23, 6, 99, 12, 1, -56);
val = Math.max(2, 23, 56, 2, 8, 45, 23, 6, 99, 12, 1, -56);
val = Math.random();

val = Math.floor(Math.random() * 10 + 1);

// Output
console.log(val);

const firstName = 'Cameron';
const lastName = 'Nepe';
const age3 = 44;
const str = 'Kia ora my name is Cameron';
const tags = 'web design, web dev, web prog';

//let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'John ';
val += 'Doe';

val = 'Kia ora, my name is ' + firstName + ' and I am ' + age3;

// Escaping
val = "That's awesome, we're off!!";

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// indexOf()
val = lastName.indexOf('e');
val = lastName.lastIndexOf('e');

// charAt()
val = firstName.charAt('2');
// Get last character
val = firstName.charAt(firstName.length - 1);

// Substring()
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(0, 3);
val = firstName.slice(-3);

// Split
val = str.split(' ');
val = tags.split(',');

// Replace()
val = str.replace('Cameron', 'Liam');

// Includes()
val = str.includes('Kia ora');

// Output
console.log(val);
