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

// => ra undefined vì a ở scope lớn //hơn
// =>  

