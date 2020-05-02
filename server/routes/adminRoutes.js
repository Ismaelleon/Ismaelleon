const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Import Schemas
const Password = require('../schemas/Password');

// Authentication
router.post('/', async (req, res) => {
    let password = await Password.findOne({});

    let correctPassword = await bcrypt.compare(req.body.password, password.password);

    if (correctPassword) {
        res.status(200).end()
    } else {
        res.status(401).end()
    }
})

// Add new project
router.post('/new_project', (req, res) => {

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
