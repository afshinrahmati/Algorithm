const arr = [2, 1, 15, 0, 8, 7, 10];

for (let i = 0; i < arr.length - 1; i++) {
  let min = i; // 0 ,,,1
  for (let j = i + 1; j < arr.length; j++) {
    // 2>1 yes,....,1>15 No, 1 > 0 yes
    if (arr[min] > arr[j]) {
      // 0 ==> 1 , 1 n=1===>3 n=0   min ==3 n=0
      min = j;
    }
  }
  [arr[i], arr[min]] = [arr[min], arr[i]];
}
console.log(arr);
