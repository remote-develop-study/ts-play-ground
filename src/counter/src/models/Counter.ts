export interface ICounter {
	value: number
	addOneValue(): void
	subOneValue(): void
}

export class Counter implements ICounter {
	value: number

	constructor(value: number) {
		this.value = value
	}

	addOneValue() {
		this.value++
	}

	subOneValue() {
		this.value--
	}
}