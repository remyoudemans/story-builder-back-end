const express = require('express')
const app = express()
const chalk = require('chalk')
const routes = require('./src/routes')

const logRequestStart = (req, res, next) => {
	console.info(
		chalk.green(req.method),
		req.originalUrl,
		chalk.yellow(res.statusCode)
	)
	next()
}

app.use(logRequestStart)

// Add headers
app.use((req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

	// Request methods you wish to allow
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	)

	// Request headers you wish to allow
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, Content-Type, X-Auth-Token'
	)

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	// res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next()
})

app.use('', routes)

app.listen(3001, () => {
	console.log('Server running on port 3001')
})
