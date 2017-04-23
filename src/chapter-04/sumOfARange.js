/**
* Creates an array of numbers from a given start to a given end.
* @param {number} start
* @param {number} end
* @param {number} [step]
* @returns {number[]}
*/
function range(start, end, step) {
  step = step || 1;
  var newRange = [];
  if(step > 0) {
    for(var i = start; i <= end; i += step) {
      newRange.push(i);
    };
  } else {
    for(var i = start; i >= end; i += step) {
      newRange.push(i);
    };
  };
  return newRange;
}

/**
* Returns the total sum of a given array of numbers.
* @param {number[]} numbers
* @returns {number} total
*/
function sum(numbers) {
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  };
  return total;
}
