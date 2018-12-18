// get the digit at a given position
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


// How many digits in a number?(or you can convert to string and get the length)
function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Find the most digits a number in the array of numbers has
function mostDigits(nums) {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
    maxDigits = Math.max(maxDigits, digitCount(num));
  }

  return maxDigits;
}

// Radix Sort
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []); //create a bucket(array) of 10 empty arrays

    for(let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k)
      digitBuckets[digit].push(num);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums; 
}
