$(document).ready(function() {

    $("#name").on("input", function() {
        let name = $("#name").val();
        $("#nameResult").text("Name: " + name);
    });

    $("#email").on("input", function() {
        let email = $("#email").val();
        $("#emailResult").text("Email: " + email);
    });

});
