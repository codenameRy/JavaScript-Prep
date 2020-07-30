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