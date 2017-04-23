/**
* Converts a given array to a linked list.
* @param {array} array
* @returns {object} list
*/
function arrayToList(array) {
  if(array.length === 1) {
    return {
      value: array[0],
      rest: null,
    }
  };
  return {
    value: array[0],
    rest: arrayToList(array.slice(1)),
  };
}

/**
* Converts a given linked list to an array.
* @param {object} list
* @returns array
*/
function listToArray(list, array) {
  var array = array || [];

  array.push(recursiveNth(list, 0))

  if(list.rest === null) {
    return array;
  } else {
    return listToArray(list.rest, array);
  }
}

/**
* Given a list and element, returns a new list with the element at the front.
* @param element
* @param {object} list
* @returns {object} prependedList
*/
function prepend(element, list) {
  return {
    value: element.value,
    rest: list,
  };
}

/**
* Returns the element at a given position in a list or undefined if no such position.
* @param {object} list
* @param {number} number
* @returns {object}
*/
function nth(list, number) {

}

/**
* Returns the element at a given position in a list or undefined if no such position.
* @param {object} list
* @param {number} number
* @returns {object}
*/
function recursiveNth(list, number, index) {
  index = index || 0

  if(index === number) {
    return list.value;
  } else if(list.rest === null) {
    return undefined;
  } else {
    return recursiveNth(list.rest, number, index + 1);
  };
}
