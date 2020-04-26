const express = require('express');
const router = express.Router();

// Import schemas
const Message = require('../schemas/Message.js'),
    Work = require('../schemas/Work.js');

router.post('/work', async (req, res) => {
    try {
        let works = await Work.find({});

        res.json(works)
        res.end()
    } catch(err) {
        console.log(err)
    }
})

router.post('/message', async (req, res) => {
    try {
        console.log(req.body)
        let message = new Message({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        message.save()
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;
