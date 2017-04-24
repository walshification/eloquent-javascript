/**
* Converts a given array to a linked list.
* @param {array} array
* @returns {object} list
*/
function arrayToList(array) {
  var list = {};
  for(var i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  };
  return list;
}

/**
* Converts a given array to a linked list.
* @param {array} array
* @returns {object} list
*/
function recursiveArrayToList(array) {
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
  var array = [];
  for(var node = list; node; node = node.rest) {
    var listValue = nth(node, 0);
    if(listValue) {
      array.push(listValue);
    };
  };
  return array;
}

/**
* Converts a given linked list to an array.
* @param {object} list
* @returns array
*/
function recursiveListToArray(list, array) {
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
    value: element,
    rest: Object.getOwnPropertyNames(list).length > 0 ? list : null,
  };
}

/**
* Returns the element at given position in a list or undefined if no such position.
* @param {object} list
* @param {number} number
* @returns {object}
*/
function nth(list, number) {
  var index = 0;
  for(var node = list; node; node = node.rest) {
    if(index === number) {
      return node.value;
    }
    index++;
  }
  return undefined;
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
