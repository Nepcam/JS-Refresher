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
