const tripletsWithSmallerSum = (arr, target) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < SortedArr.length - 2; i++) {
    count += search_pair(sortedArr, target - arr[i], i);
  }
  return count;
}

const search_pair = (arr, targetSum, first) => {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < targetSum) { 
      count += right - left;
      left += 1;
    } else {
      right -= 1;
    }
  }
  return count;
}

//test
console.log(tripletsWithSmallerSum([-1, 0, 2, 3], 3));
console.log(tripletsWithSmallerSum([-1, 4, 2, 1, 3], 5));