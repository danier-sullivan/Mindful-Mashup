const express = require('express')
const app = express();
const methodOverride = require('method-override')
require('dotenv').config();
const Strategy = require('./models/strategies.js');
const strategiesController = require('./controllers/strategies.js')
const mongoose = require('mongoose');


// Database Connection
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: false,
})

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));



// Middleware
app.use(express.static('public'))
//Body parser: Add JSON data from request to the request object
app.use(express.json())
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
// method override 
// This will allow us to make DELETE and PUT requests
app.use(methodOverride('_method'))
//Landing Page
app.get('/', (req,res) => {
    res.redirect('/strategies')
})
//Controller
app.use('/strategies', strategiesController)



// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));