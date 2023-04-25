let a = [3, 5, 6, 78, 45];

for (let i = 1; i < a.length; i++) {
  let j = i - 1;
  let themp = a[i];

  while (themp < a[j] && j >= 0) {
    a[j + 1] = a[j];
    j--;
  }
  a[j + 1] = themp;
}
console.log(a);
