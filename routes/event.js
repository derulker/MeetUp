var express = require('express');
var router = express.Router();
var calendardb = require('../db/calendar');

router.get('/event/:id', function (req, res, next) {
  console.log('Got to handler!');
  var key = req.params.id;
  res.render('selectionPage', {id: key});
    // var id = req.params.id;
    // calendardb.getCalendar(id, function(data) {
    //     console.log(data);
    //     res.json(data);
    // });
});

router.post('/event', function (req, res, next) {
  var id = calendardb.getNewKey();
  console.log(req.body);
  var name = req.body.name;
  var start = req.body.start;
  var end = req.body.end;
  calendardb.createNewCalendar(id, name, start, end);
  res.send({cal: id});
});

module.exports = router;