//* NOT SOLVED

/*
Given two strings s and t, return true if s is a subsequence of t, 
or false otherwise.

A subsequence of a string is a new string that is formed from the original string 
by deleting some (can be none) of the characters without disturbing 
the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not). 
*/

var isSubsequence = function (s, t) {
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(`indexOf ${i}`, string2.indexOf(string1[i]));
    if (t.indexOf(s[i], temp) >= temp) {
      console.log("temp at beginning", temp);
      console.log(string2.indexOf(string1[i]));
      temp = t.indexOf(s[i]);
      console.log("temp at end", temp);
    } else {
      return false;
    }
  }
  return true;
};

const string1 = "aaaaaa";
const string2 = "bbaaaa";

const test = isSubsequence(string1, string2);
console.log("Test", test);
