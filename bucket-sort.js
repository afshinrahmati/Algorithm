let a = [74, 5, 8, 7, 45, 55, 53, 95, , 9, 52, 14, 63, 2, 12, 3, 1, 100];
let b = [];
for (let i = 0; i < a.length; i++) {
  b.push([]);
}
a.forEach((i) => {
  b[Math.floor(i / 10)].push(i);
});
a = [];

b.forEach((y) => {
  arr(y).forEach((x) => {
    a.push(x);
  });
});
function arr(a) {
  for (let j = 0; j < a.length - 1; j++) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
      }
    }
  }
  return a;
}
console.log(a);
