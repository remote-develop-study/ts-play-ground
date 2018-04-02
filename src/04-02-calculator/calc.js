// 동적으로 받아서 해야할거 같은데
var num = [1, 2];
console.log.apply(console, num);
function Plus(num) {
    var sum = num.reduce(addFnc, 0);
    function addFnc(a, b) {
        return a + b;
    }
    return num;
}
function Minur(n1, n2) {
    return n1 - n2;
}
function Cross() { }
function Sub() { }
