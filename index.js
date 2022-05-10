// Take given arrays and join them into one array
// New array must be sorted in ascending order
// [0, 3, 3, 4, 4, 30, 31]

function mergeSortedArrays(arr1, arr2) {
  new_array = []
  // check inputs
  if (arr1 === 0) {
    return arr2;
  }
  if (arr2 === 0) {
    return arr1;
  }   

  return new_array
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);