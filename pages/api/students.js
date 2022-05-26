const { getStudents } = require('../../controllers/students')

export default async function handler(req, res) {
  res.status(200).json(await getStudents())
}
