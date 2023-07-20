const express = require // practice node app
const cors = require('cors')

const app = express()

// middleware
app.use(cors())

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})
