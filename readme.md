# NODEJS REST API | CRUD

Build a simple REST API with NodeJS and Express

source from [JavaScript Mastery
](https://youtu.be/l8WPWK9mS5M)

Write the CRUD actions we can do on users:

```
See all users
See details about one user
Create a user
Update a user
Destroy a user
```

Launch a Node server and go on [localhost:3000/users](localhost:3000/users) to implement each user story with [POSTMAN](https://www.postman.com/).

1. **Read All Users**

```javascript
// routes/users.js
import { getUsers } from '../controllers/users.js'
const router = express.Router()

// all routes in here are starting with /users
router.get('/', getUsers)

export default router
```

```javascript
// controllers/users.js
export const getUsers = (req, res) => {
  res.send(users)
}
```

2. **Read One User**

```javascript
// routes/users.js
import { getUser } from '../controllers/users.js'
const router = express.Router()

router.get('/:id', getUser)

export default router
```

```javascript
// controllers/users.js

export const getUser = (req, res) => {
  const { id } = req.params

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
}
```

3. **Create User**

```javascript
// routes/users.js
import { createUser } from '../controllers/users.js'
const router = express.Router()

router.post('/:id', createUser)

export default router
```

```javascript
// controllers/users.js
import { v4 as uuidv4 } from 'uuid'

export const createUser = (req, res) => {
  const user = req.body

  users.push({ ...user, id: uuidv4() })
  res.send(`User with the name ${user.firstName} added to database!`)
}
```

From Postman create User:

```Json
{
	  "firstName": "John",
	  "lastName": "Wayne",
	  "age": 54
}
```

4. **Update User**

```javascript
// routes/users.js
import { updateUser } from '../controllers/users.js'
const router = express.Router()

router.patch('/:id', updateUser)

export default router
```

```javascript
// controllers/users.js

export const updateUser = (req, res) => {
  const { id } = req.params
  const { firstName, lastName, age } = req.body

  const userFound = users.find((user) => user.id === id)

  if (firstName) userFound.firstName = firstName
  if (lastName) userFound.lastName = lastName
  if (age) userFound.age = age

  res.send(`User with the id ${id} has been updated`)
}
```

5. **Delete User**

```javascript
// routes/users.js
import { deleteUser } from '../controllers/users.js'
const router = express.Router()

router.delete('/:id', deleteUser)

export default router
```

```javascript
// controllers/users.js

export const deleteUser = (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== id)

  res.send(`User with the id ${id} deleted from the database.`)
}
```
