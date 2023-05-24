// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  let prefix = "";
  let firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== firstWord[i]) {
        return prefix;
      }
    }
    prefix += firstWord[i];
  }
  return prefix;
};

const test = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(test);
