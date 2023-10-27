

function applyCallbackToArray(array, callback) {
  return array.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const words = ["apple", "banana", "cherry"];

function double(x) {
  return x * 2;
}
function toUpper(str) {
  return str.toUpperCase();
}
const doubledNumbers = applyCallbackToArray(numbers, double);
console.log("Doubled numbers:", doubledNumbers);

const uppercaseWords = applyCallbackToArray(words, toUpper);
console.log("Uppercase words:", uppercaseWords);
