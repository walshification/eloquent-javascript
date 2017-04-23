/**
* Converts a given array to a linked list.
* @param {array} array
* @returns {object} list
*/
function arrayToList(array) {
  if(array.length === 1) {
    return {
      value: array[0],
      next: null,
    }
  };
  return {
    value: array[0],
    next: arrayToList(array.slice(1)),
  };
}
