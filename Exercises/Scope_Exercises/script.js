// 1. What’s the result of executing this code and why.
function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
test();
// => ra undefined vì log trước khi khai báo biến a
// => ra 2 vì func return về 2 

//-----------------------+++++++++-----------------------//

// 2. What is result?
var a = 1;
function someFunction(number) {
    function otherFunction(input) {
        return a;
    }
    a = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

// => ra 5 vì func trả về a và sau đó gán lại giá trị của a = 5
