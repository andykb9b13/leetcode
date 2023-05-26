var isPalindrome = function (x) {
  const arr = x.toString().split("");
  while (arr.length > 1) {
    let first = arr.shift();
    let last = arr.pop();
    if (first !== last) {
      return false;
    }
    if (arr.length === 1) {
      return true;
    }
  }
  return true;
};

const test = isPalindrome(123456787654321);
console.log(test);
