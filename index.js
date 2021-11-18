import express from 'express'
// we can use import in node because in package.json we have type: "module"
import usersRoutes from './routes/users.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => res.send('Hello from Homepage.'))

app.listen(PORT, () =>
  // server running info
  console.log(`Server Running on port: http://localhost:${PORT}`)
)
