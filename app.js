var express = require('express')
var app = express()
var chalk = require('chalk')

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

app.get('/example-story', (req, res, next) => {
	res.json({
		titles: ['Introduction', "A spider's uncle", 'How many ducks do YOU see?'],
		chapters: [
			"When I was just a boy, living a boy's life in New Jersey...",
			"I don't know if I should be saying this, but at this point I may as well. I have an arachnid for a niece.",
			"That's the funny thing about ducks isn't it? Some of them might be underwater!"
		]
	})
})

app.get('/url', (req, res, next) => {
	res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food'])
})

app.listen(3001, () => {
	console.log('Server running on port 3001')
})
