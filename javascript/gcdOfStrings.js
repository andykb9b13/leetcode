/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t 
(i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides 
both str1 and str2.
*/

var gcdOfStrings = function (str1, str2) {
  let gcd = "";
  const str1Length = str1.length;
  const str2Length = str2.length;
  const length = Math.max(str1Length, str2Length);
  for (let i = 0; i < length; i++) {
    // if gcd.length multiplied many times equals str1 or str2 return gcd
    if (str1[i] === str2[i]) {
      gcd = gcd + str1[i];
    } else {
      return gcd;
    }
  }
};

const test = gcdOfStrings("ABABAB", "ABAB");
console.log(test);
