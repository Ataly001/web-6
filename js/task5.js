$(document).ready(function() {
    let count = 3;

    $("#addBtn").click(function() {
        $("#list").append("<li>Item " + count + "</li>");
        count++;
    });

    $("#prependBtn").click(function() {
        $("#list").prepend("<li>Item " + count + "</li>");
        count++;
    });

    $("#removeBtn").click(function() {
        $("#list li:last").remove();
    });

});
