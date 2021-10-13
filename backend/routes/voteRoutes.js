const express = require('express')
const router = express.Router()
const voteController = require('../controllers/voteController')

router.get('/:id', voteController.getVotes)
router.post('/:id/:option', voteController.submitVote)

module.exports = router