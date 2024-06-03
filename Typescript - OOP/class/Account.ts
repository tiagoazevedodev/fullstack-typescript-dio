export abstract class Account {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
      this.name = name
      this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
      this.name = name
      console.log(`Name changed sucessfully to ${name}!`)
  }
  
  getName = (): string => {
      return this.name
  }

  deposit = (value: number): void => {
    if (!this.validateStatus()) return
    this.balance += value
  }

  withdraw = (value: number): void => {
      if (value > this.balance) {
          console.log("Insufficient funds")
          return
      }
      if (!this.validateStatus()) return

      this.balance -= value
  }
  
  getBalance = (): void => {
      console.log(`Value: ${this.balance}`)
  }

  validateStatus = (): true | void => {
      return this.status ? this.status : console.log("Inactive account")
  }

}