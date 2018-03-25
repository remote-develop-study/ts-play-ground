import { Counter } from './models/Counter'

const counter = new Counter(0)

const value = document.querySelector('#value')!
const adder = document.querySelector('#adder')!
const suber = document.querySelector('#suber')!

value.innerHTML = counter.value.toString()
adder.addEventListener('click', () => {
	counter.addOneValue()
	value.innerHTML = counter.value.toString()
})

suber.addEventListener('click', () => {
	counter.subOneValue()
	value.innerHTML = counter.value.toString()
})