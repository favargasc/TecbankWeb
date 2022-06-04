const { getAccounts } = require('../../controllers/account')

export default async function getAccount(req, res) {
  const { userId } = req.body

  const accounts = await getAccounts(userId)
  res.status(200).json({ accounts: accounts })
}
