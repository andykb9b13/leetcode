/*
You have a long flowerbed in which some of the plots are planted, 
and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, 
where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed without 
violating the no-adjacent-flowers rule and false otherwise.
*/

// Simply check to see if there is a 1 on either side of the 0 and if there isn't, place a 1 there.
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i] = 1;
        count++;
        console.log(flowerbed);
      }
    }
  }
  return count >= n;
};

const flower1 = [1, 0, 0, 0, 1];
const flower2 = [1, 0, 1, 0, 0, 0, 1];
const flower3 = [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1];
const flower4 = [1, 0, 0, 0, 0, 0, 0, 1];
const flower5 = [0, 0, 0, 1, 0, 0, 1, 0, 0, 0];
const flower6 = [0, 0, 0, 0, 0, 0, 0, 0];

const test = canPlaceFlowers(flower6, 5);
console.log("test", test);

// Tried to do it first where I check the distance between the 0s and did some math to see how many 1s could fit.

// var canPlaceFlowers = function (flowerbed, n) {
//   let count = 0;

//   if (flowerbed[0] === 0 && flowerbed.indexOf(1) === -1) {
//     count += Math.round(flowerbed.length / 2);
//     return count >= n;
//   }

//   for (let i = 0; i < flowerbed.length; i++) {
//     let distance = 0;
//     let number = 0;

//     if (flowerbed[i] === 1 || flowerbed[0] === 0) {
//       const next = flowerbed.indexOf(1, i + 1);
//       console.log("This is next", next);
//       if (next === -1 && flowerbed[flowerbed.length - 1] === 0) {
//         distance = flowerbed.length - i;
//         console.log("Distance in -1", distance);
//       } else {
//         distance = next - i;
//         console.log("Distance", distance);
//       }
//       number = distance / 2;
//       console.log("number", number);
//       if (distance > 2) {
//         count += Math.floor(number) - 1;
//         console.log("count", count);
//       }
//     }
//   }
//   console.log("count on the outside", count);
//   return count >= n;
// };
