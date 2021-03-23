$(document).ready(function() {
    const menu = $(".menu");
    let expanded = false;
    $(".open-menu").click(function() {
        if (expanded) {
            menu.addClass("expanded");
        }
        else {
            menu.removeClass("expanded");
        }
        expanded = !expanded;
    });
});