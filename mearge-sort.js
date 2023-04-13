const unsorted_Array = [1, 0, -5, 10, 11, 25, 3, -5, 0, 1, 3, 10, 11, 25];

function merge_Arrays(left_sub_array, right_sub_array) {
  let array = [];
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] < right_sub_array[0]) {
      array.push(left_sub_array.shift());
    } else {
      array.push(right_sub_array.shift());
    }
  }
  return [...array, ...left_sub_array, ...right_sub_array];
}

function merge_sort(unsorted_Array) {
  const middle_index = unsorted_Array.length / 2;
  if (unsorted_Array.length < 2) {
    return unsorted_Array;
  }
  const left_sub_array = unsorted_Array.splice(0, middle_index);
  return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
}
const a = merge_sort(unsorted_Array);
console.log(a);
