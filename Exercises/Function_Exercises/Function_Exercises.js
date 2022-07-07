(function () {
    reverseString();
    minMax();
    time();
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

// Tạo một function nhận vào một mảng. sau đó trả về một phần tử ngẫu nhiên trong mảng đó
// Đầu vào: [32, “abc", true, 65]
// Trả về: true
// --------------------
// Đầu vào: [32, “abc", true, 65]
// Trả về: 65

function minMax() {
    var arrs = [32, "abc", true, 65];
    var arr = arrs[Math.floor(Math.random() * arrs.length)];
    console.log(arr);
}

// Tạo một function nhận vào một số là số giờ (tính theo 24h). Trả về một chuỗi xác định với số giờ đó thì là sáng, trưa hay tối
// Đầu vào: 12
// Trả về: “Trưa"
// --------------------
// Đầu vào: 6
// Trả về: “Sáng"

function time() {
    var hours = 6;
    var hour = hours > 0 && hours <=24;
    
    if (hours < 10)
    {
        hours = "Sáng";
    }
    else if (hours <= 10 && hour <=12)
    {
        hours = "Trưa";
    }
    else if (hours <= 12 && hour <18)
    {
        hours = "Chiều";
    }
    else
    {
        hours = "Tối";
    }

    console.log(hours);
}



