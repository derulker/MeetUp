
$(document).ready(function() {

  var eventName = '';
    $('#eventName').keyup(function() {
      eventName = $('#eventName').val();
    });



  $('.create').click(function() {
    var startTime = $('#start').val();
    var endTime = $('#end').val();

    console.log(eventName);
    console.log(startTime);
    console.log(endTime);

    var id = '';

    var posting = $.post('/event', {'name': eventName, 'start': startTime, 'end': endTime}, function(data) {
      console.log(data.cal);
      id = data.cal;
      var page = $.get('/event/' + id, function(data) {
        window.location.replace('selectionPage.html');
    });
            // console.log(page);
        });
        //window.location.replace('selectionPage.html');
    });


});