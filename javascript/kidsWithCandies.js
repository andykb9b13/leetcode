/* 
There are n kids with candies. You are given an integer array candies, 
where each candies[i] represents the number of candies the ith kid has, 
and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, 
where result[i] is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, 
or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/

var kidsWithCandies = function (candies, extraCandies) {
  let arr = [];
  let count = 0;
  //   use two loops to check the value of each index modified against every index again
  for (let i = 0; i < candies.length; i++) {
    count = 0;
    for (let j = 0; j < candies.length; j++) {
      if (candies[i] + extraCandies >= candies[j]) {
        count++;
      }
    }
    // creating a counter to keep track of how many times it's true
    // If it's true every time then push true, else push false
    if (count === candies.length) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
};

const test = kidsWithCandies([2, 3, 5, 1, 3], 3);
console.log("Test", test);
