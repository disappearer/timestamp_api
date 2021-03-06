var express = require('express')
var app = express()
var dateformat = require('dateformat')

app.get('/:time?', function (req, res) {
    
  var dateString = req.params.time;
  var unixtime = parseInt(dateString)
  var date = new Date(unixtime)
  if(isNaN(unixtime)){
      date = new Date(dateString)
  }
  
  var dateObj = {
      unix: null,
      natural: null
  }
  
  if (!isNaN(date.valueOf())) {
      dateObj.unix = date.valueOf()
      dateObj.natural = dateformat(date,'mmmm d, yyyy')
  }
  
  res.send(dateObj)
})

var port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Timestamp app listening on port ' + port + '!')
})