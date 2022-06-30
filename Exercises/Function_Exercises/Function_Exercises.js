(function() {
    random();
    maxMin();
})();

function random() {
    var arr = [32, "abc", true, 65];
    var random = arr[Math.floor(Math.random() * 4)];

    console.log("Phần Tử Ngẫu Nhiên: " + random);
}

function maxMin() {
    var arr = [1, 3, 2, 8, 4, 5];
    var largest = Math.max.apply(Math, arr);
    var small = Math.min.apply(Math, arr);
    var sum = arr.reduce((reduce, element) => reduce + element);

    console.log("Max: " + largest + " Min: " + small + " Sum: " + sum);
}
