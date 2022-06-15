//Business Logic

function Bank() {
  this.bankAccounts = {};
  this.currentId = 0;
}

Bank.prototype.newAccount = function (bankAccount) {
  bankAccount.id = this.assignId();
  this.bankAccounts[bankAccount.id] = bankAccount;
};

Bank.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

function BankAccount(name, ballance) {
  this.name = name;
  this.ballance = ballance;
}

BankAccount.prototype.deposit = function (amount) {
  this.ballance += amount;
  return this.ballance;
};

BankAccount.prototype.withdrawal = function (amount) {
  this.ballance -= amount;
  return this.ballance;
};

// TESTING STARTER PACK:

let bank = new Bank();
console.log('This is the bank on page load: ', bank);

let newAccountObject = new BankAccount('test account', 20);
console.log('This is the new account: ', newAccountObject);

bank.newAccount(newAccountObject);
console.log('This is the bank after adding the new account: ', bank);

// UI Logic

$(document).ready(function () {
  $('#balance-message').text(
    'You have $' + bank.bankAccounts[1].ballance + ' in your account.'
  );

  const toggleBalanceStyling = function (currentBalance) {
    if (currentBalance < 0) {
      $('#balance-container').removeClass('positive-balance');
      $('#balance-container').addClass('negative-balance');
    } else if (currentBalance > 0) {
      $('#balance-container').removeClass('negative-balance');
      $('#balance-container').addClass('positive-balance');
    } else {
      $('#balance-container').removeClass('negative-balance');
      $('#balance-container').removeClass('positive-balance');
    }
  };

  $('#new-account-form').submit(function (event) {
    event.preventDefault();

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
    const withdrawalAmount = parseInt($('#withdrawal-field').val());
    const targetAccount = bank.bankAccounts[1];

    if (!depositAmount && !withdrawalAmount) {
      alert(
        'You must enter a deposit or withdrawal amount in order to complete your transaction'
      );
    } else {
      if (depositAmount) {
        targetAccount.deposit(depositAmount);
        $('#balance-message').text(
          'You now have $' + bank.bankAccounts[1].ballance + ' in your account.'
        );
        toggleBalanceStyling(bank.bankAccounts[1].ballance);
        $('#deposit-field').val('');
      }
    }
    if (withdrawalAmount) {
      targetAccount.withdrawal(withdrawalAmount);
      $('#balance-message').text(
        'You now have $' + bank.bankAccounts[1].ballance + ' in your account.'
      );
      console.log(bank.bankAccounts[1].ballance);
      toggleBalanceStyling(bank.bankAccounts[1].ballance);
      $('#withdrawal-field').val('');
    }
  });
});
