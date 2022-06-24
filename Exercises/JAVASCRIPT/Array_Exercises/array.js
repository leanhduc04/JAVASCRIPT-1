function main() {
    daoNguoc();
    lamPhangMang();
    locPhanTu();
    tinhTong();
    taoPhanTuMoi();
    chiaHet();
    inHoa();
    kiemTra();
}

// 8.Cho một mảng bao gồm các tên riêng,
//kiểm tra từng phần tử trong mảng và tạo ra mảng mới tương ứng với điều kiện, 
//nếu phần tử nào ở mảng ban đầu có chiều dài ít hơn 3 ký tự thì thay thế bằng số -1 trong mảng mới, 
//nếu phần tử nào có chiều dài bằng 3 ký tự thì thay thế bằng số 0 trong mảng mới, 
//còn nếu phần từ nào có chiều dài lớn hơn 3 ký tự thì thay thế bằng số 1
function kiemTra() {
    var arr = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"];
    if (arr<3) {
        console.log(3);
    }
    else if (arr>3)
    {
        console.log(4);
    }
    else
    {
        console.log(5);
    }

    console.log(arr);
}

// 7.Biến đổi tất cả các phần tử của mảng sau thành kiểu chữ in hoa
function inHoa() {
    var arr = ["avengers", "captain america", "ironman", "black panther"].map(uperCase => uperCase.toUpperCase());
    console.log(arr);
}

// 6.Lọc các phần tử chia hết cho 2 trong mảng, sau đó cộng tổng tất cả các phần tử đó lại
function chiaHet() {
    var arr = [5, 8, 3, 12, 66, 2].filter(num => num % 2 == 0);
    var sum = arr.reduce((total, value) => total + value);
    console.log(sum);
}

// 5.Tạo ra một mảng mới trong đó các phần tử của mảng mới bằng phần tử của mảng ban đầu cộng thêm 5
function taoPhanTuMoi() {
    var arr = [5, 8, 3, 12, 66, 2];
    var sum = arr.map(value => value + 5);
    console.log(sum);
}

// 4.Tính tổng các phần tử trong mảng
function tinhTong() {
    var arr = [1, 4, 90, 5, 6, 33, 2, 3, 51];
    var sum = arr.reduce((total, value) => total + value);
    console.log(sum);
}

// 3.Lọc các phần tử lớn hơn 5 trong mảng và các phần tử tìm được vào mảng mới, sau đó sắp xếp mảng đó theo thứ tự từ lớn tới nhỏ
function locPhanTu() {
    var arr = [1, 4, 90, 5, 6, 33, 2, 3, 51].filter(num => num > 5);
    arr.sort((a, b) => -a + b);
    console.log(arr);
}

// 2.Làm phẳng mảng 2 chiều [[“a", “b"], [“c", “d"], [“e", “f”]] thành mảng một chiều
function lamPhangMang() {
    var arr = [["a", "b"], ["c", "d"], ["e", "f"]].flat();
    console.log(arr);
}

// 1.Đảo ngược mảng [1, 2, 3, 4, 5] mà không dùng phương thức array.reverse()
function daoNguoc() {
    var arrs = [1, 2, 3, 4, 5];
    var arr = [arrs[4], arrs[3], arrs[2], arrs[1], arrs[0]];
    console.log(arr);
}

main();