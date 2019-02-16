var feed = new Instafeed({
    get: 'user',
    userId: '8520336645',
    target: 'instafeed',
    clientId:'dba3adcfe8174ae3b673fff2fd6d31c1',
    accessToken: '8520336645.1677ed0.45d8c2039c9b43199ec3e08c438d1712',
    sortBy: 'most-recent',
    limit: 3,
    links: false,
    template: '<a class="insta col-xs-1 col-md-4 col-lg-4" href="{{link}}" target="_blank" id="{{id}}"><img class="instaimg" src="{{image}}" /></a>',
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