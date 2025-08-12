import fastify from 'fastify'
import crypto from 'node:crypto'

const server = fastify(

  {
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
}

)

type Course = {
  id: string
  title: string
  time?: string
  nanoID?: string
}

const courses: Course[] = [
  { id: '1', title: 'Curso de Node.js' },
  { id: '2', title: 'Curso de React' },
  { id: '3', title: 'Curso de React Native' },
]

server.get('/', (request, reply) => {
  return reply.send({ messsage: 'Hello World' })
})

server.get('/courses', (request, reply) => {
  return reply.send({ courses })
})

server.get('/courses/:id', (request, reply) => {
  type Params = {
    id: string
  }

  const params = request.params as Params
  const courseId = params.id

  const course = courses.find(course => course.id === courseId)

  if (course) {
    return { course }
  }

  return reply.status(404).send()
})


//Buscar por nanoID
server.get('/courses/nanoid/:id', (request, reply) => {
  type Params = {
    nanoID: string,
    id: string
  }

  const params = request.params as Params
  const nanoID = params.id

  const course = courses.find(course => course.nanoID === nanoID)

  if (course) {
    return { course }
  }

  return reply.status(404).send()
})



server.post('/courses', (request, reply) => {
  type Body = {
    title: string,
      }

  const courseId = crypto.randomUUID()

  const body = request.body as Body
  const courseTitle = body.title
  const courseTimestamp = new Date().toISOString()
  const nanoID = crypto.randomBytes(4).toString('hex')

  if (!courseTitle) {
    return reply.status(400).send({ message: 'Título obrigatório.' })
  }

  courses.push({ id: courseId, title: courseTitle, time: courseTimestamp, nanoID: nanoID })

  return reply.status(201).send({ courseId , courseTitle, time: courseTimestamp , nanoID: nanoID })
})


server.listen({ port:3333 }).then(() => {

  console.log(`HTTP server running!`)
})