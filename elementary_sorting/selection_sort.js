// function selectionSort(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let min = i;
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[j] < arr[min]) min = j;
//     }

//     if(i !== min) {
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }

//   return arr;
// }

//ES5 version:
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) min = j;
    }

    if(i !== min) swap(arr, i, min)
  }

  return arr;
}



selectionSort([23, 42, 56, 11, 8, 22, 69]);
