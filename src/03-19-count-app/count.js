var createDOMById = function (id) { return document.getElementById(id); }, _incBtn = createDOMById('increment-btn'), _decBtn = createDOMById('decrement-btn'), _countEle = createDOMById('count-number');
var num = 0;
var renderCount = function () {
    _countEle.innerHTML = num.toString();
};
_countEle.addEventListener('load', function () {
    renderCount();
});
_incBtn.addEventListener('click', function () {
    num += 1;
    renderCount();
});
_decBtn.addEventListener('click', function () {
    num -= 1;
    renderCount();
});
