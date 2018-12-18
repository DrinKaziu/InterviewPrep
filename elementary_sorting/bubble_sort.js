function bubbleSort(arr) {
  let noSwaps;
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if(noSwaps) break;
  }

  return arr;
}

//ES5 version
// function bubbleSort(arr) {
//   let noSwaps;
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   };

//   for(let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for(let j = 0; j < i - 1; j++) {
//       if(arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false;
//       }
//     }

//     if(noSwaps) break;
//   }

//   return arr;
// }

bubbleSort([1, 4, 5, 3, 7, 2, 9]);
