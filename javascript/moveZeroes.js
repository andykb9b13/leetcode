/*
Given an integer array nums, move all 0's to the end of it while maintaining the 
relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

// do a bubble sort?
// I want to iterated through an array and if the index value is 0, slice it and push it to the end.

var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = 0;
  while (p2 < nums.length) {
    if (nums[p2] !== 0) {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]]; //swap the two elements
      p1++;
    }
    p2++;
  }
  return nums;
};

const nums1 = [0, 1, 0, 5, 13];
const nums2 = [0, 0, 0, 0, 3, 0, 1];
const test = moveZeroes(nums2);
console.log("Test", test);
