//Business Logic
function BankAccount(name, ballance) {
  this.name = name;
  this.ballance = ballance;
}

function Bank() {
  this.bankAccounts = {};
  this.currentId = 0;
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
  $('#balance-container').text(
    'You now have $' + bank.bankAccounts[1].ballance + ' in your account.'
  );
  if (this.ballance < 0) {
    $('#balance-container').toggleClass('negative-balance');
  } else if (this.ballance > 0) {
    $('#balance-container').toggleClass('positive-balance');
  }
  return this.ballance;
};

BankAccount.prototype.withdrawal = function (amount) {
  this.ballance -= amount;
  $('#balance-container').text(
    'You now have $' + bank.bankAccounts[1].ballance + ' in your account.'
  );
  return this.ballance;
};

// UI Logic

// STARTER PACK:

let bank = new Bank();
console.log('This is the bank on page load: ', bank);

let newAccountObject = new BankAccount('test account', 20);
console.log('This is the new account: ', newAccountObject);
bank.newAccount(newAccountObject);
console.log('This is the bank after adding the new account: ', bank);
//newAccountObject.withdrawal(-5);

$(document).ready(function () {
  $('#balance-container').text(
    'You have $' + bank.bankAccounts[1].ballance + ' in your account.'
  );

  $('#new-account-form').submit(function (event) {
    event.preventDefault();
    const newAccountName = $('#new-account-name-field').val();
    const initialDepositAmount = parseInt($('#initial-deposit-field').val());

    // Entry validator:
    if (!newAccountName && !initialDepositAmount) {
      alert(
        'You must enter an account name and initial deposit value in order to create your new account'
      );
    } else if (!newAccountName) {
      alert(
        'You must enter an account name in order to create your new account'
      );
    } else if (!initialDepositAmount) {
      alert(
        'You must enter an initial deposit value in order to create your new account'
      );
    }

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
    const withdrawalAmount = parseInt($('#withdrawal-field').val());

    // Entry validator:
    if (!depositAmount && !withdrawalAmount) {
      alert(
        'You must enter a deposit or withdrawal amount in order to complete your transaction'
      );
    }

    let tempOnlyAccount = bank.bankAccounts[1001];

    newAccountObject.deposit(depositAmount);

    // Clear Deposit Field
    $('#deposit-field').val('');

    console.log('Test account balance:', [1].ballance);

    //$('h1').append(bank.bankAccounts[1001].ballance);

    tempOnlyAccount.withdrawal(withdrawalAmount);
  });
});

// * set currentId 1000

// BUILD REQUIREMENTS:

// --> constructor for account

// --> ballance
// --> account name
// --> account number

// --> prototype withdraw
// --> prototype deposit

// if done make a bank`
