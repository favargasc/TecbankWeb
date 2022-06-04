const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getUserId = async (name, age) => {
  const pool = await prisma.user.findFirst({
    where: {
      name: name,
      age: age
    }
  })

  if (pool == null) {
    return -1
  }

  return pool.id
}

module.exports = { getUserId }
