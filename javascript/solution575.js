/**
 * @param {number[]} candyType
 * @return {number}
 */

function uniqueOnly(value, index, self) {
  return self.indexOf(value) === index;
}

var distributeCandies = function (candyType) {
  const halfOfCandies = candyType.length / 2;
  var unique = candyType.filter(uniqueOnly);

  if (unique.length < halfOfCandies) {
    return unique.length;
  } else {
    return halfOfCandies;
  }
};

// NOTE: THE LENGTH OF SAMPLE WILL ALWAYS BE EVEN
const sample = [1, 2, 2, 3, 4];
console.log("ANSWER : ", distributeCandies(sample));
