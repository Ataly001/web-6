$(document).ready(function() {
    $("#startBtn").click(function() {
        $("#box9").stop(true).animate({left: "200px"}, 500);
        $("#box9").animate({top: "150px"}, 500);
        $("#box9").animate({width: "50px", height: "50px"}, 500);
        $("#box9").animate({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px"
        }, 500);
    });

});
