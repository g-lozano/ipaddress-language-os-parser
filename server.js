var express = require('express')
var app = express()
var port = 8080

app.get('/', function (req, res) {
    var language = req.headers["accept-language"].split(',')[0]
    var ipaddress = req.headers["x-forwarded-for"]
    var os = req.headers["user-agent"].split('(')
    os.shift()
    os = os.join('').split(')').shift()
    
    var json = {
        ipaddress: ipaddress,
        language: language,
        software: os
    }
    
    res.send(json)
})

app.listen(process.env.PORT || port)