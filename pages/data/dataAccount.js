const { randCreditCard, randNumber } = require('@ngneat/falso')

const fs = require('fs')

const generateDataAccount = (amount) => {
  const accounts = []

  for (let id = 1; id <= amount; id++) {
    const accountNum = randCreditCard()
    const saldo = `₡${randNumber()}`

    accounts.push({
      id: id,
      accountNum: accountNum.account,
      saldo: saldo
    })

    console.log(accounts)
  }
  return { accounts: accounts }
}

const data = generateDataAccount(9)
fs.writeFileSync('accounts.json', JSON.stringify(data))
