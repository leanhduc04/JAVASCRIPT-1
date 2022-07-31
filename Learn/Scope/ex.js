var ten = 'Hung'

function ngoai() {
    var loi_chao = 'Xin Chao,'
    return function trong(ten)
    {
        return loi_chao + ten
    }
}

console.log(ngoai()) // => log ra func

var in_ra = ngoai() //Tạo biến để lấy dc giá trị hàm trong

console.log(in_ra(ten)) // => log ra Xin Chao, Hung