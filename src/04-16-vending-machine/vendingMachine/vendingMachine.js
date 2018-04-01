var products = [
    {
        name: 'Coke',
        price: 500
    },
    {
        name: 'Fanta',
        price: 1000
    },
    {
        name: 'Sporite',
        price: 1500
    },
];
var inputedMoney = 0;
var selectedProduct = '';
var selectedPrice = 0;
function inputMoney(money) {
    return inputedMoney = money;
}
function zeroMoney() {
    if (inputedMoney === 0) {
        throw new Error('금액을 투입하세요.');
    }
}
function selectProduct(name) {
    zeroMoney();
    products.map(function (item) {
        if (item.name === name) {
            selectedProduct = item.name;
            return selectedPrice = item.price;
        }
    });
    if (selectedProduct === '') {
        return console.log('선택할수 없는 제품입니다. 다시 확인해 주세요.');
    }
    if (inputedMoney >= selectedPrice) {
        inputedMoney = inputedMoney - selectedPrice;
        console.log(selectedProduct + " (\uC744)\uB97C \uBC18\uD658, " + inputedMoney + " \uC6D0 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.");
        selectedProduct = '';
        selectedPrice = 0;
        return;
    }
    else {
        console.log('금액이 부족합니다.');
    }
    return;
}
function getChange() {
    console.log(inputedMoney + " \uC6D0\uC744 \uBC18\uD658");
    inputedMoney = 0;
    return;
}
console.log('inputMoney', 'selectProduct(name)', 'getChange');
