const express = require('express')
const router = express.Router()
const ReportCtrl = require('../controllers/reportControllers')

//POST request to /report to create a new report
router.post('/report', ReportCtrl.createNewReport )

//GET request to /report to fetch all report
router.get('/report', ReportCtrl.fetchAllReport )

//GET request to /report/:month to fetch report 
router.get('/report/:month', ReportCtrl.fetchSingleReport )

//PUT request to /report/:month to modify a single report
router.put('/report/:month', ReportCtrl.modifySingleReport)

//DELETE request to /report/:month to delete a report
router.delete('/report/:month', ReportCtrl.deleteSingleReport)

module.exports = router