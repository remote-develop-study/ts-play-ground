// import isExist from './validate/isExitst'
// import minusNumber from './validate/minusNumber'
var getArea = function (name, x, y, z) {
    var pai = 3.14;
    if (name === 'circle') {
        // isExist(x)
        // minusNumber(x)
        return x * x * pai;
    }
    if (name === 'rect') {
        // isExist(x)
        // isExist(y)
        // minusNumber(x)
        // minusNumber(y)
        return x * y;
    }
    if (name === 'trapezoidArea') {
        // isExist(x)
        // isExist(y)
        // isExist(z)
        // minusNumber(x)
        // minusNumber(y)
        // minusNumber(z)
        return (x + y) * z / 2;
    }
};
