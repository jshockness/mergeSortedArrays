// Take given arrays and join them into one array
// New array must be sorted in ascending order
// [0, 3, 3, 4, 4, 30, 31]

function mergeSortedArrays(arr1, arr2) {
  const new_array = []
  let array1Item = (arr1[0])
  let array2Item = (arr2[0])
  i = 1
  j = 1
  
  // check inputs
  if (arr1 === 0) {
    return arr2;
  }
  if (arr2 === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item)
    if ( !array2Item || array1Item < array2Item) {
      new_array.push(array1Item)
      array1Item = arr1[i];
      i++;
    } else {
      new_array.push(array2Item);
      array2Item =arr2[j];
      j++;
    }
  }
  // new_array.push(arr1)
  // new_array.push(arr2)
  // new_array.sort()

  return new_array
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));