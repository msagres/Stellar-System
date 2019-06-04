$(document).ready(function () {
    $(".particules").delay(650).animate({
        "opacity": "1"
    }, 2000);

    $(".sun").delay(50).animate({
        "opacity": "1"
    }, 1500);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById("stellarSystem").className = 'slideDown';
    }, 200);
  }, false);