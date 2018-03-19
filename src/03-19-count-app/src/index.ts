require('html-loader!./views/index.html');
require('./styles/index.scss');
import { MyCounter } from './scripts/app';

const counter = new MyCounter();

document.body.appendChild(counter.plusButton);
document.body.appendChild(counter.numberText);
document.body.appendChild(counter.minusButton);
