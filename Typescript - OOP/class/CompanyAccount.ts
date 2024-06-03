import { Account } from './Account'

export class CompanyAccount extends Account {
  private cnpjNumber: string

  constructor(cnpjNumber: string, name: string, accountNumber: number) {
      super(name, accountNumber)
      this.cnpjNumber = cnpjNumber
  }

  getloan = (value: number): void => {
      if (!this.validateStatus()) {return}
      this.deposit(value)
  }

}