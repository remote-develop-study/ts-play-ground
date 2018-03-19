require('html-loader!./views/index.html');
require('./styles/index.scss');
import { MyCounter } from './scripts/app';

const counter = new MyCounter();
const text = MyCounter.countingText;

document.body.appendChild(counter.plusButton);
document.body.appendChild(MyCounter.countingText);
document.body.appendChild(counter.minusButton);

counter.plusButton.addEventListener('click', MyCounter.increase, false);
counter.minusButton.addEventListener('click', MyCounter.decrease, false);


// const counter = {
//   num: 0
// }

// function increase() {
//   counter.num++
//   currentText.innerHTML = counter.num.toString()
// }

// function decrease() {
//   counter.num--
//   currentText.innerHTML = counter.num.toString()
// }

// const currentText = document.querySelector('.text')
// currentText.innerHTML = counter.num.toString()
// document.querySelector('.plus').addEventListener('click', increase)
// document.querySelector('.minus').addEventListener('click', decrease)