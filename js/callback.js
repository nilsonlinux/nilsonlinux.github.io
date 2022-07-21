$(document).ready(function() {
    var code = GetParameterByName("code");

    if (!code) {
        code = GetParameterByName("oauth_verifier");
    }

    if (code) {
        $("#panel-callback").addClass("panel-success");
        $("#title").text("Please paste following code in ShareX");
        $("#code").val(code);

        $("#callback-code .btn").on("click", function() {
            navigator.clipboard.writeText(code).then(function() {
                $("#callback-code .btn").text("Copied!");
            }, function() {
                $("#callback-code .btn").text("Copy failed.");
            });
        });
    } else {
        var error = GetParameterByName("error");

        if (error) {
            $("#panel-callback").addClass("panel-danger");
            $("#title").text("ShareX is not properly authorized");
            $("#callback-error").text("Error: " + error);
        } else {
            $("#panel-callback").addClass("panel-warning");
            $("#title").text("Invalid access");
            $("#callback-error").text("Unexpected error occured.");
        }

        $("#callback-code").hide();
        $("#callback-error").show();
    }
});

function GetParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}