/**
* Reduces an array of arrays to a single-level array.
* @param {object[]} array
* @returns {object[]}
*/
function flatten(array) {
  return array.reduce(function(flatArray, cur) {
    return flatArray.concat(
      Array.isArray(cur) ? flatten(cur) : cur
    );
  }, []);
}
