import { Drinks } from '../src/drinks';

interface Inventory {
  drinks: Array<Drinks>;
  snack?: Array<any>;
}

const drinks: Array<Drinks> = [
  {
    name: '코카콜라',
    sellingPrice: 1500,
    costPrice: 500,
    quantity: 10,
    category: 'SODA',
    temperature: 'COLD',
  },
  {
    name: '닥터페퍼',
    sellingPrice: 1500,
    costPrice: 450,
    quantity: 9,
    category: 'SODA',
    temperature: 'COLD',
  },
  {
    name: '코카콜라 제로',
    sellingPrice: 1500,
    costPrice: 500,
    quantity: 8,
    category: 'SODA',
    temperature: 'COLD',
  },
  {
    name: '조지아 오리지널',
    sellingPrice: 1500,
    costPrice: 300,
    quantity: 7,
    category: 'COFFEE',
    temperature: 'COLD',
  },
  {
    name: '조지아 맥스',
    sellingPrice: 1500,
    costPrice: 300,
    quantity: 6,
    category: 'COFFEE',
    temperature: 'COLD',
  },
  {
    name: '태양의 마테차',
    sellingPrice: 1500,
    costPrice: 200,
    quantity: 5,
    category: 'TEA',
    temperature: 'COLD',
  },
  {
    name: '순수',
    sellingPrice: 1500,
    costPrice: 100,
    quantity: 4,
    category: 'WATER',
    temperature: 'COLD',
  },
  {
    name: '코코팜 오리지널',
    sellingPrice: 1500,
    costPrice: 300,
    quantity: 3,
    category: 'JUICE',
    temperature: 'COLD',
  },
  {
    name: '미닛메이드 오렌지',
    sellingPrice: 1500,
    costPrice: 700,
    quantity: 2,
    category: 'JUICE',
    temperature: 'COLD',
  },
  {
    name: '미닛메이드 자몽',
    sellingPrice: 1500,
    costPrice: 800,
    quantity: 1,
    category: 'JUICE',
    temperature: 'COLD',
  },
];

const inventory: Inventory = {
  drinks,
};

export { inventory };
