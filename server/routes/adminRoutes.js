const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Import Schemas
const Password = require('../schemas/Password'),
    Message = require('../schemas/Message');
    Work = require('../schemas/Work');

// Authentication
router.post('/', async (req, res) => {
    let password = await Password.findOne({});

    let correctPassword = await bcrypt.compare(req.body.password, password.password);

    if (correctPassword) {
        // Expires in 10 minutes
        res.cookie('id', password.password.slice(31), { expires: new Date(Date.now() + 600000) })
        res.end()
    }
})

// Add new project
router.post('/new_project', (req, res) => {
    let newProject = new Work({
        title: req.body.title,
        date: req.body.date,
        github: req.body.githubURL,
        tags: req.body.tags
    });

    newProject.save()
})

// Get db data
router.post('/get_data', async (req, res) => {
    if (req.body.option === 'messages') {
        let messages = await Messages.find({});

        res.json({messages: messages})
        res.end()
    } else if (req.body.option === 'projects') {
        let projects = await Work.find({});

        res.json({projects: projects})
        res.end()
    }
})

// New Password (comment this)
/*router.get('/new_password', async (req, res) => {
    try {
         let adminPassword = await bcrypt.hash('Rfm8cnFfaA8rSTb', 10);
        console.log(adminPassword)

        let password = new Password({
            password: adminPassword
        });

        password.save()
        res.write('<h1>hihihi</h1>')
        res.end()
    } catch (err) {
        console.log(err)
    }
})*/

module.exports = router;
