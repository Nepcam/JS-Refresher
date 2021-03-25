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
var firstName = 'Cameron'; // Camel case
var first_name = 'Mason'; // Underscore
var FirstName = 'Darius'; // Pascal case

// LET
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

CONST
const name = 'Liam';
console.log(name);
// cannot reassign
name = 'Cameron';
// Have to assign a value
const greeting;

const person = {
  name: 'Cam',
  age: 44,
};

person.name = 'Pae';
person.age = 38;

console.log(person);

const num = [1, 2, 3, 4, 5];
num.push(6, 7);

console.log(num);
