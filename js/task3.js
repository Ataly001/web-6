$(document).ready(function() {

    $("#fadeOutBtn").click(function() {
        $("#photo").fadeOut(1000);
    });

    $("#fadeInBtn").click(function() {
        $("#photo").fadeIn(1000);
    });

    $("#fadeToggleBtn").click(function() {
        $("#photo").fadeToggle(1000);
    });

});
