require('dotenv').config()
const express = require('express')
const exampleStories = require('./example-stories')
const queryStuff = require('./query-stuff')
const example = require('./example')

const router = express.Router()

const asyncWrap = require('express-async-wrap')

router.route('/example-story').get(exampleStories.getExampleStories)
router.route('/query-stuff').get(queryStuff.getQueryStuff)
router.route('/url').get(example.getNames)
router.route('/').get((req, res, next) => res.send('WELCOME!! It is indeed working!'))
router.route('/stories/:id').get(asyncWrap(async (req, res, next) => {
    const id = req.params.id

    const { db } = require('./services/db')
    const story = await db.oneOrNone('SELECT * FROM stories WHERE id = ${id}', { id })

    if (!story) {
        res.status(404)
        res.send()
    }
    else {
        res.send({
            meta: {},
            data: {
                story
            }
        })
    }

}))

module.exports = router
