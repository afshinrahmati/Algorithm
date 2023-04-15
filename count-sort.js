var countingSort = function (arr) {
  var counts = [];
  var max = +Math.max(...arr); // get Max number
  //   give  to all val ziro

  for (var i = 0; i < arr.length; i++) {
    counts[i] = 0;
  }
  //   sum loop number
  for (var i = 0; i < arr.length; i++) {
    counts[arr[i]] += 1;
  }

  let sort_data = [];
  for (let j = 0; j < max + 1; j++) {
    while (counts[j] > 0) {
      sort_data.push(j);
      counts[j]--;
    }
  }
  return sort_data;
};
const arr = [0, 5, 1, 2, 3, 1, 2, 4, 1, 5, 2];

const result = countingSort(arr);
console.log(result);
