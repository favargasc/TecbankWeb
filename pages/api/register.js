const { insertUser } = require('../../controllers/register')

export default async function setUser(req, res) {
  const { name, lastname, user, password, email } = req.body

  const userId = await insertUser(name, lastname, user, password, email)
  res.status(200).json({ userId: userId })
}
