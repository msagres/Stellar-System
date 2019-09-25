// LOADER
$(window).on("load", function () {
    $(".loadercontainer").fadeOut("slow");
});
// LOADER


// PARTICLES
$(document).ready(function () {
    $(".particules").delay(650).animate({
        "opacity": "1"
    }, 1600);
});
// PARTICLES


// TITTLE
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById("stellarSystem").className = 'slideDown';
    }, 600);
}, false);
// TITTLE