$(function() {
    var i = 1;
    $(".music img").click(function() {
        console.log("jcsi");
        $(this).toggleClass("rotate");

        if (i == 0) {
            $("audio")[0].play();
            i = 1;
        } else {
            $("audio")[0].pause();
            i = 0;
        }
    })
})