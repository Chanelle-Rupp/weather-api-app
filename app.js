$(document).ready(function () {
    
    //Get user location
    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }
    function error() {
        console.log('404: Weather could not be found. Look out the window instead.');
    }

    //Apply API
    function weather(lat, long) {
        var url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(url, function (data) {
            //Console log data to find specific data for DOM
            console.log(data);
            updateDOM(data);
        });
    }
    //Execute weather function
    weather();

    //Changing innerHTML
    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
    }
});