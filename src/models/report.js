const mongoose = require('mongoose')
//Create report schema
const reportSchema = new mongoose.Schema({
    month: String,
    publications: Number,
    videos: Number,
    hours: Number,
    returnVisits: Number,
    bibleStudies: Number,
    comments: String
})
const Report = mongoose.model('Report', reportSchema)
module.exports = Report