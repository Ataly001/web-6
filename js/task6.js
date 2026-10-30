$(document).ready(function() {
    let imageChanged = false;
    let linkChanged = false;

    $("#imageBtn").click(function() {

        if (imageChanged == false) {
            $("#photo").attr("src", "phototree.jpg");
            imageChanged = true;
        } else {
            $("#photo").attr("src", "photonature.jpg");
            imageChanged = false;
        }

    });

    $("#linkBtn").click(function() {

        if (linkChanged == false) {
            $("#myLink").attr("href", "https://www.youtube.com");
            $("#myLink").text("Visit YouTube");
            linkChanged = true;
        } else {
            $("#myLink").attr("href", "https://www.google.com");
            $("#myLink").text("Visit Google");
            linkChanged = false;
        }

    });

});
