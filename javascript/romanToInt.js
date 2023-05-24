// Problem: Given a roman numeral, convert it to an integer.

var romanToInt = function (s) {
  let integer = 0;
  let numArray = s.split("");

  for (let i = 0; i < numArray.length; i++) {
    if (
      numArray[i] === "I" &&
      (numArray[i + 1] === "X" || numArray[i + 1] === "V")
    ) {
      integer -= 1;
    } else if (
      numArray[i] === "X" &&
      (numArray[i + 1] === "L" || numArray[i + 1] === "C")
    ) {
      integer -= 10;
    } else if (
      numArray[i] === "C" &&
      (numArray[i + 1] === "D" || numArray[i + 1] === "M")
    ) {
      integer -= 100;
    } else {
      numConversion(numArray[i]);
    }
  }

  function numConversion(num) {
    switch (num) {
      case "I":
        return (integer += 1);
      case "V":
        return (integer += 5);
      case "X":
        return (integer += 10);
      case "L":
        return (integer += 50);
      case "C":
        return (integer += 100);
      case "D":
        return (integer += 500);
      case "M":
        return (integer += 1000);
      default:
        return 0;
    }
  }
  return integer;
};

const test1 = romanToInt("MCMXIV");
console.log(test1);
