const API_URL = "https://zdof0f6ve0.execute-api.us-east-1.amazonaws.com/prod/api/v1";

var map = L.map('mapid', {zoomControl: false});
map.setView([39.0224, -77.3064], 10);

L.control.zoom({
    position:'topright'
}).addTo(map);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

var circle = L.circle([39.0224, -77.3064], {
    color: '#9B8752',
    fillColor: '#9B8752',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

// this is the id of the form
$("#contactForm").submit(function(e) {
    
    var url = "https://zdof0f6ve0.execute-api.us-east-1.amazonaws.com/prod/api/v1/contact";
    
    var body = objectifyForm($("#contactForm").serializeArray());
    console.log(body);

    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(body),
        success: function(data) {
            alert("Thanks for contacting L&C Grounds Company"); // show response from the php script.
        },
        error: function(e) {
            alert("An error occurred, try back later");
        }
    });
    
    e.preventDefault(); // avoid to execute the actual submit of the form.
});

function objectifyForm(formArray) {
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}