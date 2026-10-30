$(document).ready(function() {
    let changed = false;
    $("#changeBtn").click(function() {

        if (changed == false) {
            $("#first").text("Text changed using ID!");
            $(".second").html("<b>Text changed using class!</b>");
            $("h3").css("color", "orange");
            $("#first").css("font-size", "20px");
            $(".second").css("background-color", "lightyellow");

            changed = true;
        } else {
            $("#first").text("This is the first paragraph.");
            $(".second").html("This is the second paragraph.");
            $("h3").css("color", "black");
            $("#first").css("font-size", "16px");
            $(".second").css("background-color", "white");

            changed = false;
        }
    });
});
