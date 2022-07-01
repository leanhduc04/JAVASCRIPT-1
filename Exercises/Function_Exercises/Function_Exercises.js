(function () {
    reverseString();
})()


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Tạo một function nhận vào một chuỗi, trả về kiểu chữ đảo ngược của từng ký tự trong chuỗi đó
// Đầu vào: “Hello"
// Trả về: “hELLO"

function reverseString() {
    var str = 'Hello';
    var arrs = [];
    // 1. Tách từng phần tử trong chuỗi thành mảng
    var arr = str.split('');

    // 2. Đảo ngược phần tử 
    for (var i of arr) {
        if (i === i.toLowerCase()) 
        {
            var a = i.toUpperCase();
            arrs.push(a);
        }
        else 
        {
            var b = i.toLowerCase();
            arrs.push(b);
        }
    }

    var arrs2 = arrs.join('');
    console.log(arrs2);
}


