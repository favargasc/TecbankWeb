const getAnimals = require('../../controllers/animals')

export default async function handler(req, res) {
  const animals = await getAnimals()
  res.status(200).json(animals)
}
