$(document).ready(function() {

    $(".content").hide();

    $(".accordion").click(function() {
        $(".content").not($(this).next()).slideUp(400);
        $(this).next().slideToggle(400);
    });

});
