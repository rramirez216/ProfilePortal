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
app.get('/profiles', async (req, res) => {
  try {
    const allUsers = await pool.query(
      'SELECT id, first_name, last_name, email FROM users'
    )
    res.json(allUsers.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/profiles/:id', async (req, res) => {
  try {
    const { id } = req.params
    const profile = await pool.query(
      'SELECT id, first_name, last_name, email FROM users WHERE id = $1',
      [id]
    )
    res.json(profile.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

app.put('/profiles/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { first_name, last_name, email } = req.body
    const updatedProfile = await pool.query(
      'UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4',
      [first_name, last_name, email, id]
    )
    res.json('profile Updated')
  } catch (err) {
    console.error(err.message)
  }
})

app.delete('/profiles/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteRow = await pool.query('DELETE FROM users WHERE id = $1', [id])
    res.json('profile deleted')
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
