// Template Literals
const name = 'John';
const age = 10;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html =
  '<ul><li>Name: ' +
  name +
  '</li><li>Age: ' +
  age +
  '</li><li>Job: ' +
  job +
  ' </li><li>City: ' +
  city +
  ' </li></ul>';

function mihi() {
  return 'Tena koutou';
}

// With template strings (es6)
html = `
  <ul>
  <li>Name:${name}</li>
  <li>Age:${age}</li>
  <li>Job:${job}</li>
  <li>City:${city}</li>
  <li>${4 * 4}</li>
  <li>${mihi()}</li>
  <li>${age > 20 ? 'Old dogg' : 'Pup'}</li>
  </ul>
`;

document.body.innerHTML = html;
