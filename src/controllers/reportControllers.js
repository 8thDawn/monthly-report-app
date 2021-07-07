exports.createNewReport = function (req, res) {
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
}

exports.fetchAllReport = (req, res) => {
    //retrieve all reports
    Report.find({}, (err, reports) => {
        if (err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({ message: "All available reports", reports })
        }    
    })

}

exports.fetchSingleReport = (req, res) => {
    Report.findOne({month: req.params.month}, (err, report) => {
        if (err) {
            return res.status(500).json({message: err})
        } else if (!report) {
            return res.status(404).json({message: "No report found"})
        } else {
            return res.status(200).json({ report })
        }
    })
}

exports.modifySingleReport = (req, res) => {
    Report.findOneAndUpdate(req.params.id, {
        publications: req.body.publications,
        videos: req.body.videos,
        hours: req.body.hours,
        returnVisits: req.body.returnVisits,
        bibleStudies: req.body.bibleStudies
    }, (err, report) => {
        if (err) {
            return res.status(500).json({message: err})
        } else if (!report) {
            return res.status(404).json({message: "Report not found"})
        } else {
            report.save((err, savedReport) => {
                if (err) {
                    return res.status(400).json({message: err})
                } else {
                    return res.status(200).json({message: "Report modified successfully!"})
                }
            })
        }
    })
}

exports.deleteSingleReport = (req, res) => {
    Report.findOneAndDelete(req.params.id, (err, book) => {
        if (err) {
            return res.status(500).json({message:err})
        }else if (!report) {
            return res.status(404).json({message: "Report not found"})
        } else {
            return res.status(200).json({message: "Report deleted successfully"})
        }
    })
}