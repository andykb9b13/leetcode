/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', 
and they can appear in both lower and upper cases, more than once.
*/

var reverseVowels = function (s) {
  let vowelIndexArr = [];
  let vowelArr = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "A" ||
      s[i] === "e" ||
      s[i] === "E" ||
      s[i] === "i" ||
      s[i] === "I" ||
      s[i] === "o" ||
      s[i] === "O" ||
      s[i] === "u" ||
      s[i] === "U"
    ) {
      vowelIndexArr.push(i);
      vowelArr.push(s[i]);
    }
  }
  let reverseVowels = vowelArr.reverse();
  let wordArr = s.split("");

  for (let i = 0; i < vowelIndexArr.length; i++) {
    wordArr[vowelIndexArr[i]] = reverseVowels[i];
  }
  return wordArr.join("");
};

const string1 = "trAveler";
const string2 = "onamonapeia";
const test = reverseVowels(string1);
console.log(test);
