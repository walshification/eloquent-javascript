/**
* Given an array, returns a new array that is its inverse.
* @param {array} array
* @returns {array} reversed
*/
function reverseArray(array) {
  var reversed = new Array(array.length);
  for(var i = 0; i < array.length; i++) {
    reversed[array.length - (i + 1)] = array[i];
  };
  return reversed;
}

/**
* Returns an array modified to be reversed.
* @param {array} array
* @returns {array} reversed
*/
function reverseArrayInPlace(array) {
  for(var i = 0; i < array.length / 2; i++) {
    var changingIndex = array.length - (i + 1);
    var tmpOriginal = array[changingIndex];
    array[changingIndex] = array[i];
    array[i] = tmpOriginal;
  };
  return array;
}

