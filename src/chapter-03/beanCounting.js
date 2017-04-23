/**
* Counts the number of capital Bs there are in a string.
* @param {string} string
* @returns {number}
*/
function countBs(string) {
  return countChar(string, 'B');
}

/**
* Counts the occurrences of a given character in a given string.
* @param {string} string
* @param {string} char
* @returns {number}
*/
function countChar(string, char) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] === char) {
      count++;
    };
  };
  return count;
}
