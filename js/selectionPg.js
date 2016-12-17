$(document).ready(function() {

    // page is now ready, initialize the calendar...

    //console.log('ID is: ' + cal);

  $('#groupCalendar').fullCalendar({
    defaultView: 'agendaWeek',
    contentHeight: 'auto',
    aspectRatio: 10,
    unselectAuto: false
  });

  var calendarid = '';
  $('.calendarid').keyup(function() {
    calendarid = $('.calendarid').val();
  });

  $('.available').click(function() {
    console.log(calendarid);
    $('#userCalendar').empty();
    $('#userCalendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyDlW-2QSBbrA1dbo9WzBAAtXH0Tj4ia6cE',
      defaultView: 'agendaWeek',
      events: {
        googleCalendarId: calendarid
      },
      contentHeight: 'auto',
      aspectRatio: 10,
      selectable: true,
      select: function(start, end) {
        $('#groupCalendar').fullCalendar('select', start, end);
      },
      unselectAuto: false,
      unselect: function(view) {
        $('#groupCalendar').fullCalendar('unselect');
      }
    });
  });


});
