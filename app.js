const express = require('express')
const app = express()
const port = '3000'

//setting up db
const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/report'

app.use(express.json())

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

//POST request to /report to create a new report
app.post('/report', function (req, res) {
    //retrieve new report details from req.body
    // const report = req.body.report
    Report.create({
        publications: req.body.publications,
        videos: req.body.videos,
        hours: req.body.hours,
        returnVisits: req.body.returnVisits,
        bibleStudies: req.body.bibleStudies,
        comments: req.body.comments
    }, (err, newReport) => {
        if (err) {
            return res.status(500).json({ message: err})
        } else {
            return res.status(200).json({ message: "Submission of monthly report successful!", newReport})
        }
    })
})
//GET request to /report to fetch all report
app.get('/report', (req, res) => {
    //retrieve all reports
    Report.find({}, (err, reports) => {
        if (err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({ message: "All available reports", reports })
        }    
    })

})
//GET request to /request/:month to fetch report 
app.get('/report/:month', (req, res) => {
    Report.findOne({month: req.params.month}, (err, report) => {
        if (err) {
            return res.status(500).json({message: err})
        } else if (!report) {
            return res.status(404).json({message: "No report found"})
        } else {
            return res.status(200).json({ report })
        }
    })
})
//DELETE request to /report/:month to delete a report


app.listen(port, function() {
    console.log(`Server is running on ${port}`)
})