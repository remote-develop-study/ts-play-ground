// Optional Properties & Readonly properties & Excess Property Checks
interface IPerson{
  firstLang:string;
  lastLang:string;
  age:number;
  sayHi:string;
}

const employee: IPerson = {
  firstLang: "JavaScript",
  lastLang: "TypeScript",
  age: 22,
  sayHi: function (): string {
    return "Hello";
  }
};

// Indexable Types
const arr = ["양배추", "순무", "무", "당근", "딸기", "바나나", "망고"];

// Function Types
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

// Class Types
class Car {
  engine: string;

  constructor(engine: string) {
    this.engine = engine
  }

  disp(): void {
    console.log("Engine is  :   " + this.engine)
  }
}
