const express = require('express'),
    bodyParser = require('body-parser'),
	path = require('path'),
    cors = require('cors'),
    routes = require('./routes/router'),
    adminRoutes = require('./routes/adminRoutes'),
    mongoose = require('mongoose');

const app = express();

// connect db
mongoose.connect('mongodb://localhost:27017/ismaelleon', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: 'http://ismaelleon.duckdns.org'
}))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/', routes)
app.use('/admin', adminRoutes)

let port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
