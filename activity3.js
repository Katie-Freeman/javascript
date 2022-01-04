class BankAccount{
    constructor(accountType, balance){
        this.accountType = accountType
        this.balance = balance
    }

    withdraw(){
        this.balance -= 50
        console.log("withdraw")
    }
    
    deposit(){
        this.balance += 100
        console.log("deposit")
    }
}

let bankAccount = new BankAccount('Checking', 1500) 
    bankAccount.deposit()
    console.log(bankAccount.balance) 
    
    bankAccount.withdraw()
    console.log(bankAccount.balance)



