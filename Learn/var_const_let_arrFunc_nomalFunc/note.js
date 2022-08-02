// Sự khác nhau var, let và const
// khi khai báo bằng var => có hiệu lực toàn bộ func {Cho phép định nghĩa lại}
// khi khai báo bằng let hoặc const => chỉ có hiệu lực tại nơi khai báo {Không cho phép định nghĩa lại, Khai báo bằng const không được gán lại giá trị}
// ----------------------- 

// // arrow func 
// => let abc = (a, b) => (a + b)
// // nomal func
// => function abcd(a, b) {
//     return a + b
// }

// Sự khác nhau arrow func và nomal func
// => nomal func
// có thể gán ngữ cảnh thực thi(this)
// => arrow func
// không thể gán ngữ cảnh thực thi(this) => nó sẽ lấy ngữ cảnh từ cha


// Có 4 cách tạo func 
// => 1. function abc() {
//    console.log(this)
// }
// abc()

// => 2. var a = {
//     abc: function(){
//         console.log(this)
//     }
// }
// a.abc()

// => 3. function abc() {
//     console.log("Xin chào, " + this.name)
// }
// let newContext = {name: 'an'}

// => 4. function abc() {
//     console.log("xin chào, " + this.name)
// }
// var a = {
//     b: new abc()
// }
