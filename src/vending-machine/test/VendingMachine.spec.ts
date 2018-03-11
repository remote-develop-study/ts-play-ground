import {VendingMachine} from "../models/VendingMachine";

describe('VendingMachine Class Test', () => {
  describe('Method Test', () => {
    it('should have drinks', async () => {
      const VM = new VendingMachine<>(100)
      expect(VM.balance).toBe(100)
    })
  })
})