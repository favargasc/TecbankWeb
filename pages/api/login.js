const { getUserId } = require('../../controllers/login')

export default async function getLogin(req, res) {
  const { user, password } = req.body

  const userId = await getUserId(user, password)
  res.status(200).json({ userId: userId })
}
