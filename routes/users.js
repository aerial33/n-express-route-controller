import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Wayne",
    age: 54
  },
  {
    firstName: "Jane",
    lastName: "Tarzan",
    age: 34
  }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
  console.log(users);

  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(`User with the name ${user.firstName} added to database!`);
})

export default router;