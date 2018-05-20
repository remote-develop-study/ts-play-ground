interface products {
  name: string,
  price: number
}

const products = [
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

let inputedMoney:number = 0;
let selectedProduct:string = '';
let selectedPrice:number = 0;

function inputMoney(money: number):number {
  return inputedMoney = money;
}

function zeroMoney():void {
  if(inputedMoney === 0) {
    throw new Error('금액을 투입하세요.');
  }
}
function selectProduct(name: string):void {
  zeroMoney();
  products.map( item => {
    if(item.name === name) {
      selectedProduct = item.name;
      selectedPrice = item.price;
    }
  });
  if(selectedProduct === '') {
    console.log('선택할수 없는 제품입니다. 다시 확인해 주세요.');
  }
  if(inputedMoney >= selectedPrice) {
    inputedMoney = inputedMoney - selectedPrice;
    console.log(`${ selectedProduct } (을)를 반환, ${ inputedMoney } 원 남았습니다.` );
    selectedProduct = '';
    selectedPrice = 0;
    return;
  }else {
    console.log('금액이 부족합니다.');
  }
  return;
}

function getChange():void {
  console.log(`${ inputedMoney } 원을 반환`);
  inputedMoney = 0;
  return;
}

console.log('inputMoney', 'selectProduct(name)', 'getChange');
