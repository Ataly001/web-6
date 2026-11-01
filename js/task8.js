$(document).ready(function() {

    $("#animateBtn").click(function() {
        $("#box8").animate({
            left: "200px",
            width: "150px",
            height: "150px"
        }, 1000);
    });

    $("#resetBtn").click(function() {
        $("#box8").stop(true).animate({
            left: "0px",
            width: "100px",
            height: "100px"
        }, 1000);
    });

});
