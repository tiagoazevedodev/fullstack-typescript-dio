import { Account } from './Account'

export class PersonalAccount extends Account {
  private cpfNumber: string

  constructor(cpfNumber: string, name: string, accountNumber: number) {
      super(name, accountNumber)
      this.cpfNumber = cpfNumber
  }

}
