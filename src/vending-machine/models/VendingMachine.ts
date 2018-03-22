// import fs from 'fs'

export interface IVendingMachine<T> {
  type: T
  balance: number

}

export class VendingMachine<T> implements IVendingMachine<T> {
  type: T
  balance: number
  products: T[]


  constructor(balance: number) {

  }

  initialize(): void {
    console.log('aaaa')
  }
}