class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance, status){
       if(balance >= 100){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = status
       }
       else {
           console.log("Insufficient Funds")
       }
    }
    withdraw(amount){
        this.balance -= amount
        if (this.balance < 0){
            this.overdraft()
        }
        this.update()
        console.log("withdraw")
    }
    
    deposit(amount){
        this.balance += amount
        this.update()
        console.log("deposit")
        
    }

    update(){
        if(this.balance >= 100){
            this.status = "Open"
            console.log("Status: Open")
        }
        else if(this.balance < 0){
            this.status = "Frozen"
            console.log("Status: Frozen")
        }
    }

    overdraft(){
        this.balance -= 35
    }

    transfer(amount, account){
        this.withdraw(amount)
        account.deposit(amount)
    }
}

let account1 = new BankAccount("Mary", "Doe", "Lynn", "Checking", 100, "Open")

let account2 = new BankAccount("Mary", "Doe", "Lynn", "Savings", 100, "Open")

account1.deposit(400)
console.log("Account1 Balance", account1.balance)

account1.transfer(100, account2)

console.log("Account1 Balance", account1.balance)
console.log("Account2 Balance", account2.balance)