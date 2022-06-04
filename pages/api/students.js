const { getUserId } = require('../../controllers/login')
const { getStudents } = require('../../controllers/students')
const { getClients } = require('../../controllers/students')
const libreria = require ('../data/accounts.json')

console.log (libreria)

export default async function getLogin(req, res) {
  const { user, password } = req.body

  const userId = await getUserId(user, password)
  res.status(200).json({ userId: userId })
export default async function handler(req, res) {
  res.status(200).json(libreria)
}

/*
export default async function getAllClients(req, res) {
  req.status(200).json(await getClients())
}

export default async function sendInfo(req, res) {
  res.status(200).json(await getClients())
}
*/


