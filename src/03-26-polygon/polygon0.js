var polygonScale = (function () {
    var circle = function (r) {
        return r * r * 3.14;
    };
    var rect = function (x, y) {
        return x * y;
    };
    var trapezoid = function (x, y, h) {
        return (x + y) * 2 / 2;
    };
    return {
        circle: circle,
        rect: rect,
        trapezoid: trapezoid
    };
})();
