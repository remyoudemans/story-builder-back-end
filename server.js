const express = require('express')
const app = express()
const chalk = require('chalk')
const routes = require('./src/routes')
const cors = require('cors')

const logRequestStart = (req, res, next) => {
	console.info(
		chalk.green(req.method),
		req.originalUrl,
		chalk.yellow(res.statusCode)
	)
	next()
}

app.use(cors())
app.use(logRequestStart)

app.use('', routes)

app.listen(3001, () => {
	console.log('Server running on port 3001')
})
