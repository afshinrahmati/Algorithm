const countingSort = (arr: number[]) => {
  const counts: number[] = [];

  const max: number = Math.max(..arr); // get Max number

  //   give  to all val ziro

  for (let i = 0; i < max; i++) {
    counts[i] = 0;
  }
  console.log(counts);

  //   sum loop number

  for (let i = 0; i < max; i++) {
    counts[arr[i]] += 1;
  }
  console.log(counts);

  return counts;
};

const result = countingSort([1, 2, 1, 2, 5, 2, 10, 5, 3]);

console.log(result);
