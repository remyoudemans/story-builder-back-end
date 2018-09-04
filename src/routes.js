const express = require('express')
const exampleStories = require('./example-stories')
const queryStuff = require('./query-stuff')
const example = require('./example')

const router = express.Router()

router.route('/example-story').get(exampleStories.getExampleStories)
router.route('/query-stuff').get(queryStuff.getQueryStuff)
router.route('/url').get(example.getNames)

module.exports = router
