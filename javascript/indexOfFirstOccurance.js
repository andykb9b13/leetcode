/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

var strStr = function (haystack, needle) {
  const haystackArr = [];
  for (let i = 0; i < haystack.length; i++) {
    haystackArr.push(haystack.slice(i, i + needle.length));
  }

  return haystackArr.indexOf(needle);
};

const testCase = strStr("sadButsad", "du");

console.log(testCase);
