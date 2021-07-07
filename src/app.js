const express = require('express')
const app = express()
const port = '3000'
const dbSetup = require('./database/setup')
const reportRoutes = require('./routes/reportRoutes')

app.use(express.json())
//setup database
dbSetup()
app.use(reportRoutes)

//setup schema
//const Report = require('./models/report')


app.listen(port, function() {
    console.log(`Server is running on ${port}`)
})