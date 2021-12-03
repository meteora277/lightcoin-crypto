class Transaction {
  constructor(amount, account) {

    this.amount = amount;
    this.account = account;
  }
  commit() {

    if (this.account.balance + this.value > 0) {
      this.time = new Date();
      this.account.addTransaction(this);
    } else {
      console.log('Insufficient Funds');
    }
  }
}
class Withdrawal extends Transaction {

  get value() {
    return this.amount * -1;
  }

}
class Deposit extends Transaction {


  get value() {
    return this.amount;
  }

}
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];

  }
  get balance() {
    let _balance = 0;
    this.transactions.forEach(transaction => _balance += transaction.value);
    return _balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');

let t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

let t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

let t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

// console.log('Balance:', myAccount.balance);
console.log(myAccount.balance);
