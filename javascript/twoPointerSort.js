function twoPointerSort(arr) {
  let swapp;
  do {
    swapp = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapp = true;
      }
    }
  } while (swapp === true);
  return arr;
}

const arr1 = [9, 3, 2, 6, 5];
const arr2 = [2, 10, 4, 5, 20, 34, 1, 0];
const test = twoPointerSort(arr2);
console.log("Test", test);
