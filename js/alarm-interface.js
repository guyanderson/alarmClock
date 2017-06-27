var AlarmClock = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  $('#time').text(moment());
});

$(document).ready(function(){
  $("#clock").submit(function(event){
    event.preventDefault();
    var setTime = $('#alarmTime').val();
    var newAlarm = new AlarmClock(setTime);
    var currentTime = moment().format("HH:mm");
    var alarm = newAlarm.wakeUp();
    // console.log(moment($('#alarmTime').val()).add(05, 'mins').format('hh:mm A'));
    $("#alarm-time-show").show();
    $(".alarm-set-time").text(setTime);
    $("#snooze-button").show();
    $("#alarm-success").text(alarm);
    if (setTime <= currentTime) {
      $("#alarm-image").show();
    }
  });
  $("#snooze-button").click(function(){
    var setTime = $('#alarmTime').val();
    var newAlarm = new AlarmClock(setTime);
    var snoozeAlarm = newAlarm.snooze();
    $("#snooze-time").show();
    $("#alarm-image").hide();
    $("#alarm-success").hide();
    $("#snooze-button").hide();
    $("#alarm-time-show").hide();
    $(".snooze-time").text(snoozeAlarm);
  });
});
