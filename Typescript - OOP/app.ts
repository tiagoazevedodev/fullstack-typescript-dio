// DIO Banking
import { PersonalAccount } from './class/PersonalAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { WeirdAccount } from './class/WeirdAccount';

const personalAccount = new PersonalAccount('123.456.789-00', 'John Doe', 123456)
const companyAccount = new CompanyAccount('12.345.678/0001-99', 'John Doe Company', 123456)
const weirdAccount = new WeirdAccount('John Doe', 123456)

personalAccount.deposit(100)
personalAccount.withdraw(50)
personalAccount.setName('John Doe')
personalAccount.getName()
personalAccount.validateStatus()
personalAccount.getBalance()

companyAccount.deposit(100)
companyAccount.withdraw(50)
companyAccount.setName('John Doe Company')
companyAccount.getloan(100)
companyAccount.validateStatus()
companyAccount.getBalance()
companyAccount.getName()


weirdAccount.weirdDeposit(100)
weirdAccount.deposit(50)
weirdAccount.withdraw(50)
weirdAccount.validateStatus()
weirdAccount.setName('John Doe')
weirdAccount.getBalance()
weirdAccount.getName()
