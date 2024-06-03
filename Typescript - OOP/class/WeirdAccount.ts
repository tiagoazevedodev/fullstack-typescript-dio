import { Account } from "./Account";

export class WeirdAccount extends Account {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  weirdDeposit = (value: number): void => {
    if (!this.validateStatus()){
      return
    }
    this.deposit(value+10)
  }
}