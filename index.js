//Challenge 1 - Ensure
// Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

//Solution 1
function ensure(value) {
  if (value === undefined) {
    throw 'Error1'
  } 
  return value;
}

try {
  console.log(ensure());
} catch(err) {
  console.log(err);
}

//Solution 2
function ensure2(value) {
  if (value !== undefined) return value;
    throw 'Error2';
}

try {
  console.log(ensure2());
} catch(err) {
  console.log(err);
}

//Challenge 2 - Remove Property
// Implement the removeProperty function which takes an object and property name, and does the following:

// If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.

//Solution 1 - hasOwnProperty and if Statement
function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }
  return false;
}

//Solution 2 - Object.keys and ternary operator
function removeProperty(obj, prop) {
  return (Object.keys(obj).indexOf(prop) > -1) ? delete obj[prop] : false;
}

//Challenge 3 - Date
// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

//Solution 1 - Rearrange characters in string with split by '/'
function formatDate(userDate) {
  var parts = userDate.split('/');
  if (parts[0].length == 1) parts[0] = '0' + parts[0];
  if (parts[1].length == 1) parts[1] = '0' + parts[1];
  return parts[2] + parts[0] + parts[1];
}

console.log(formatDate("9/4/2014"));

//Solution 2 - User of Date Object
function formatDate2(userDate) {
  userDate = new Date(userDate);
  y = userDate.getFullYear().toString();
  m = (userDate.getMonth() + 1).toString();
  d = userDate.getDate().toString();
  if (m.length == 1) m = '0' + m;
  if (d.length == 1) d = '0' + d;
  return y + m + d;
}

console.log(formatDate2("10/2/2020"));