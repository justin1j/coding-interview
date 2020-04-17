// Time : O(n) , Space : O(n)

const findAveragesOfSubarrays = (K, arr) => {
  const result = [];

  let sum = 0.0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
  
    if (end >= K - 1) {
      result.push(sum / K);
      sum -= arr[start];
      start += 1;
    }
  }

  return result;
}

// test
console.log(findAveragesOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))