$(document).ready(function() {
    $("#animateBtn").click(function() {
        $("#box10").stop(true).animate({
            left: "200px",
            top: "100px",
            width: "150px",
            height: "150px",
            opacity: 0.3
        }, 1000);
    });

    $("#resetBtn").click(function() {
        $("#box10").stop(true).animate({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px",
            opacity: 1
        }, 1000);
    });

});
