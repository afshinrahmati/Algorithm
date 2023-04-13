var countingSort = function (arr) {
    var counts = [];
    var max = +Math.max(...arr); // get Max number
    //   give  to all val ziro
   
    for (var i = 0; i < max; i++) {
        counts[i] = 0;
    }
    //   sum loop number
    for (var i = 0; i < max; i++) {
        counts[arr[i]] += 1;
    }
    console.log(counts);
    return counts;
};
var result = countingSort([1, 2, 1, 2, 5, 2, 10,5]);
console.log(result);
