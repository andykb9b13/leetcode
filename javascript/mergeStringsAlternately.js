/* 
You are given two strings word1 and word2.
Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end 
of the merged string.

Return the merged string.
*/

var mergeAlternately = function (word1, word2) {
  let merged = "";
  let first = word1.split("");
  let second = word2.split("");
  while (first.length > 0 || second.length > 0) {
    if (first.length > 0) {
      merged = merged + first.shift();
    }
    if (second.length > 0) {
      merged = merged + second.shift();
    }
  }
  return merged;
};

const test = mergeAlternately("categories", "doggy");
console.log(test);
