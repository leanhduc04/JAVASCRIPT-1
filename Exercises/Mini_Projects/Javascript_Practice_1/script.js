function caculator() {
    var num_a = prompt('Nhập số thứ nhất')
    var choice = prompt('Bạn muốn thực hiện phép tính gì (+; -; *; /)')
    var num_b = prompt('Nhập số thứ hai')
    var plus = Number(num_a) + Number(num_b)
    var minus = Number(num_a) - Number(num_b)
    var multip = Number(num_a) * Number(num_b)
    var into = Number(num_a) / Number(num_b)

    if (isNaN(num_a) || isNaN(num_b)) {
        alert('Nhập vào một số')
    }

    else if (choice == '+') {
        alert('Kết quả phép tính: ' + num_a + choice + num_b + ' = ' + plus)
    }

    else if (choice == '-') {
        alert('Kết quả phép tính: ' + num_a + choice + num_b + ' = ' + minus)
    }

    else if (choice == '*') {
        alert('Kết quả phép tính: ' + num_a + choice + num_b + ' = ' + multip)
    }

    else if (choice == '/') {
        alert('Kết quả phép tính: ' + num_a + choice + num_b + ' = ' + into)
    }

    else {
        alert('Chưa nhập đủ thông tin')
    }
}

function menu() {
    var list_menu = prompt(`
    1.Sản Phẩm 1: 500$
    2.Sản Phẩm 2: 1000$
    3.Sản Phẩm 3: 2000$
    4.Thoát (Phím bất kỳ ngoài 1,2,3)
    Lựa chọn của bạn:
    `)

    var product_item = [
        {
            maSP: '1',
            tenSP: 'Sản Phẩm 1',
            giaSP: 500,
            soLuongSP: 20
        },

        {
            maSP: '2',
            tenSP: 'Sản Phẩm 2',
            giaSP: 1000,
            soLuongSP: 15
        },

        {
            maSP: '3',
            tenSP: 'Sản Phẩm 3',
            giaSP: 2000,
            soLuongSP: 10
        },
    ]

    var arr_menu = list_menu.split(',')

    function getSelectedItems(arr_menu) {
        return product_item.filter((item) => arr_menu.includes(item.maSP))
    }

    var selected_items = getSelectedItems(arr_menu)

    var cart_item = []

    for (var item of selected_items) {
        var quantity_items = prompt('Nhập số lượng: ')

        if (+quantity_items > item.soLuongSP) {
            alert('Sản Phẩm Không Đủ')
            break
        }

        cart_item.push({ product_item: item, quantity_items: +quantity_items })
    }

    for (var item of cart_item) {
        var item_name = item.product_item.tenSP
        var item_quantity = item.quantity_items
        var item_price = item.product_item.giaSP
        var cart_amount = item_quantity * item_price

        alert('Tên sản phẩm: ' + item_name + ', Số lượng sản phẩm: ' + item_quantity + ', Thành tiền: ' + cart_amount + 'USD')
    }
}

function random() {
    var npc = 1 + Math.floor(Math.random() * 10)
    var player = prompt('Nhập số bạn đoán (Từ 1 -> 10) : ')

    console.log(npc);

    if (Number(player) == '' || isNaN(player) || player >= 11 || player <= 0) {
        alert('Kiểm tra lại !!')
    }

    else if (player == npc) {
        alert('Giỏi lắm <3')
    }

    else if (player > npc) {
        alert(npc + ' cơ mà. ' + player + ' à ' + 'xa quá rồi !!!')
    }

    else {
        alert(npc + ' cơ mà. ' + player + ' á ' + 'còn khuya !!!')
    }
}
