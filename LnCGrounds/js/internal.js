var feed = new Instafeed({
    get: 'user',
    userId: '8519743205',
    target: 'instafeed',
    clientId:'c8205dc490e24531aa33a39374b8b5ed',
    accessToken: '8519743205.c8205dc.608b2c9f018b48db96a59897512546f9',
    sortBy: 'most-recent',
    limit: 3,
    links: false,
    template: '<a class="insta col-sm-1 col-md-4" href="{{link}}" target="_blank" id="{{id}}"><img class="instaimg" src="{{image}}" /></a>',
    resolution: 'standard_resolution'
});
feed.run();

$("#com_click").click(function(){
    $("#com_click").css("background-color", "#9F8658");
    $("#com_click").css("color", "#ffffff");
    $("#res_click").css("background-color", "#ffffff");
    $("#res_click").css("color", "#9F8658");
    $(".comercialSection").css("display","block");
    $(".residentialSection").css("display","none");
});

$("#res_click").click(function(){
    $("#res_click").css("background-color", "#9F8658");
    $("#res_click").css("color", "#ffffff");
    $("#com_click").css("background-color", "#ffffff");
    $("#com_click").css("color", "#9F8658");
    $(".residentialSection").css("display","block");
    $(".comercialSection").css("display","none");
});