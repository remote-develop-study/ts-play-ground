interface CalcDisplay {
  currentValue: number; // 현재 화면에 표시되고 있는 값
  status?: string; // 계산중인지 계산 완료된 상태인지 표시
}

interface CalcCPU {
  add(num: number): number;
  sub(num: number): number;
  mul(num: number): number;
  div(num: number): number;
  clear(): void;

}

interface CalcButtons {
  numbers: Array<number>;
  chs: '+' | '-';
  

}

interface Calculator {
  buttons: CalcButtons;
  computingUnit: CalcCPU;
  display: CalcDisplay;
}

class AwesomeCalculator implements Calculator {
  constructor() {
    
  }
}


/**
 * 계산기
 * 화면
 * 버튼
 * 숫자, add, sub, div, mul, clear, done, 
 * 계산로직 (회로)
 */