/**
* Returns true for even numbers; otherwise, false
* @param {number} number
* @returns {boolean}
*/
function isEven(number) {
  number = Math.abs(number);

  if(number === 0) {
    return true;
  } else if(number == 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}
