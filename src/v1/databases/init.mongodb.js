const mongoose = require('mongoose')

//connect mongoose
mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}?authSource=admin`).then( _ => console.log('Connected mongoose success!...'))
.catch( err => console.error(`Error: connect:::`, err))

// all executed methods log output to console
mongoose.set('debug', true)
    
// disable colors in debug mode
mongoose.set('debug', { color: false })

// get mongodb-shell friendly output (ISODate)
mongoose.set('debug', { shell: true })


module.exports = mongoose;