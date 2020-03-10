/* eslint-env node */

const express = require('express')
const app = express()

const apiMiddleware = require('./middleware/api')
const redirectsMiddleware = require('./middleware/redirects')

const port = process.env.PORT || 3000

app.use(redirectsMiddleware)
app.use('/api', apiMiddleware)

app.use(express.static('public'))

app.listen(port, () => console.log(`Ready on localhost:${port}!`))
