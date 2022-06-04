const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const addStudents = async () => {
  await prisma.user.createMany({
    data: [
      {
        name: 'fabian',
        age: 21
      },
      {
        name: 'pedro',
        age: 21
      }
    ]
  })
}

const getStudents = async () => {
  return await prisma.user.findMany()
}

getStudents()
addStudents()

module.exports = { addStudents, getStudents }
