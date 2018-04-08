/*
  1 + 1 = 2
  1 + 2 * 3 = 7
  (1 + 2) * 3 = 9
*/
// 사칙연산의 규칙은 이해해야지만 쓸수있다.
function caculator(express) {
    return eval(express);
}
caculator('1 + 1');
caculator('1 + 2 * 3');
caculator('(1 + 2) * 3');
