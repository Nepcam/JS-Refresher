const firstName = 'Cameron';
const lastName = 'Nepe';
const age = 44;
const str = 'Kia ora my name is Cameron';
const tags = 'web design, web dev, web prog';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'John ';
val += 'Doe';

val = 'Kia ora, my name is ' + firstName + ' and I am ' + age;

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
