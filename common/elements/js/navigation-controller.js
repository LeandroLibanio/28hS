$(document).ready(function(){
    $("#nav-submenu-bg").hide();
    $(".nav-secondary-options").hide();
    $(".nav-super").mouseover(function(){
        $("#nav-submenu-bg").show();
        $(this).find(".nav-sub-body .nav-secondary-options").show();
    });
    $(".nav-super").mouseout(function(){
        $("#nav-submenu-bg").hide();
        $(this).find(".nav-sub-body .nav-secondary-options").hide();
    });
});