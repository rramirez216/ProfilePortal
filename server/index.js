const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()

// practice node app
// middleware
app.use(cors())
app.use(express.json())

// create a user
app.post('/signup', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body
    const newUser = await pool.query(
      'INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, email, password]
    )

    res.json(newUser.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// get all users
app.get('/profile', async (req, res) => {
  try {
    const allUsers = await pool.query(
      'SELECT first_name, last_name, email FROM users'
    )
    res.json(allUsers.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
