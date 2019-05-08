$(document).ready(function(){
    $("#navigation").load("common/elements/navigation.html");

    $(".nav-item").hover(function(){
        $("#nav-submenu-bg").show();
    },
    function(){
        $("#nav-submenu-bg").hide();
    });
});