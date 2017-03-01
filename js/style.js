$(function() {

    var i = 0;
    $(".button").click(function() {
        console.log("jiu");
        $(".button").toggleClass("rotate");
        if (i == 0) {
            $(".myMusic")[0].pause();
            i = 1;
        } else {
            $(".myMusic")[0].play();
            i = 0;
        }
    });

})