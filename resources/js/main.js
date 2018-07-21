// Animate on scroll
$("#view-work").on("click", function(){
    var images = $("#images").position().top;

    $("html, body").animate(
        {
            scrollTop: images
        },
        900
    );
});