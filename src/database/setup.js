//setting up db
const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/report'

module.exports = function () {
    mongoose.connect(connectionString, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('database connection successful')
        }
    })
}
