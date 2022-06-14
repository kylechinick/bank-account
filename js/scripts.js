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

Bank.prototype.newAccount = function (BankAccount) {
  this.BankAccount = this.assignId();
  this.bankAccounts[BankAccount.id] = BankAccount;
};

Bank.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

//Account Functions
BankAccount.prototype.deposit = function (amount) {
  this.ballance += amount;
  return this.ballance;
};

BankAccount.prototype.withdrawal = function (amount) {
  this.ballance -= amount;
  return this.ballance;
};

// * set currentId 1000

// BUILD REQUIREMENTS:

// --> constructor for account

// --> ballance
// --> account name
// --> account number

// --> prototype withdraw
// --> prototype deposit

// if done make a bank`
