var uuid = require('node-uuid');

module.exports = {

  getNewKey: function() {
    console.log('Creating New Key!');
    return uuid.v4();
  },

  createNewCalendar: function(id, name, startTime, endTime) {
    var calendars = database.collection('calendars');
    calendars.save({
        _id: id,
        name: name,
        minTime: startTime + ':00:00',
        maxTime: endTime + ':00:00'
    });
    console.log('Saved new calendar!');
  },

  getCalendar: function(id, callback) {
    var calendars = database.collection('calendars');
    calendars.findById(id).toArray(callback);
  }
}