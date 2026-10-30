
$(document).ready(function() {

    $("#upBtn").click(function() {
        $("#panel").slideUp(500);
    });

    $("#downBtn").click(function() {
        $("#panel").slideDown(500);
    });

    $("#toggleBtn").click(function() {
        $("#panel").slideToggle(500);
    });

});
