$( document ).ready(function() {
    var collapsed = true;
    $(".navbar-toggler").click(function(event){
        if(collapsed){
            $(".business-header").css("height", "130vh");
            $(".carousel").css("margin-top", "30vh" );
            collapsed =false;
        } else {
            $(".business-header").css("height", "65vh");
            $(".carousel").css("margin-top", "10vh" );
            collapsed = true;
        }
    });

    $("#brandLogo").click(function(){
        window.location.href= "./index.html"
    });

    $(".scheduleLink").click(function(){
        window.location.href= "./contact.html"
    });
});