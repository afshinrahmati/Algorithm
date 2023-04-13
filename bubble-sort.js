const a = [4, 52, 1, 3, 45, 8, 52, 74, 12, 10, 10, 0, 23, 25, 63, 9];
for (let j = 0; j < a.length - 1; j++) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]];
    }
  }
}

console.log(a);
