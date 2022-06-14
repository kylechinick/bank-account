//Business Logic
function BankAccount(name, ballance) {
  this.name = name;
  this.ballance = ballance;
}

function Bank() {
  this.bankAccounts = {};
  this.currentId = 1000;
}

//Bank Functions

Bank.prototype.newAccount = function (bankAccount) {
  bankAccount.id = this.assignId();
  this.bankAccounts[bankAccount.id] = bankAccount;
};

Bank.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

//Account Functions
BankAccount.prototype.deposit = function (amount) {
  console.log('Amount to deposit: ', amount);
  console.log('Starting balance: ', this.ballance);
  this.ballance += amount;
  console.log('Updated balance: ', this.ballance);
  return this.ballance;
};

BankAccount.prototype.withdrawal = function (amount) {
  this.ballance -= amount;
  return this.ballance;
};

// let bankAccountOne = new BankAccount('Cool Name Dude', 3.5);
// console.log(bankAccountOne);

// bank.newAccount(bankAccountOne);

// UI Logic

// STARTER PACK:

let bank = new Bank();
console.log(bank);

let newAccountObject = new BankAccount('test account', 20);
bank.newAccount(newAccountObject);

console.log(bank);

$(document).ready(function () {
  $('#new-account-form').submit(function (event) {
    event.preventDefault();
    const newAccountName = $('#new-account-name-field').val();
    const initialDepositAmount = parseInt($('#initial-deposit-field').val());

    let newAccountObject = new BankAccount(
      newAccountName,
      initialDepositAmount
    );
    bank.newAccount(newAccountObject);
    newAccountObject.deposit(initialDepositAmount);
  });

  $('#update-balance-form').submit(function (event) {
    event.preventDefault();
    const depositAmount = parseInt($('#deposit-field').val());
    // console.log(depositAmount);
    const withdrawalAmount = parseInt($('#withdrawal-field').val());

    // let tempOnlyAccount = bank.bankAccounts[1001];

    tempOnlyAccount.deposit(depositAmount);

    console.log('Test account balance:', bank.bankAccounts[1001]);
    console.log(typeof bank.bankAccounts[1001].ballance);

    tempOnlyAccount.withdrawal(withdrawalAmount);
  });
});

// bankAccountOne.deposit(100);
// console.log(bankAccountOne);

// bankAccountOne.withdrawal(25);
// console.log(bankAccountOne);

// bank.newAccount(bankAccountOne);
// console.log(bankAccountOne);
// console.log(bank);

// * set currentId 1000

// BUILD REQUIREMENTS:

// --> constructor for account

// --> ballance
// --> account name
// --> account number

// --> prototype withdraw
// --> prototype deposit

// if done make a bank`
