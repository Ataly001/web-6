$(document).ready(function() {

    $("#changeBtn").click(function() {
        $("#first").text("Text changed using ID!");
        $(".second").html("<b>Text changed using class!</b>");
        $("h3").css("color", "orange");
        $("#first").css("font-size", "20px");
        $(".second").css("background-color", "lightyellow");
    });

});
