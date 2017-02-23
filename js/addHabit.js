window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    //$(".image-block").height($(document).height()*0.179);
    //$(".image-block").height(($(document).height() - $("#bottomMenu").height())*0.20);
    $(".image-block").height(($(document).height() - $("#bottomMenu").height())*0.23);
    $("#allHabits").show();
    //$("#addNewHabit").hide();
    $("#addNewHabitButton").click(function(){
    		addHabitLoad();
    });
};

function addHabitLoad(){
    $("#allHabits").hide();
    $("#addNewHabit").show();
}