$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=7b6fd3efc84f91cabf71b2c81ba20e63';
      $.getJSON(url, function(data){
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;
        var temp = data.main.temp;
        var city = data.name;
        var imgUrl = "http://openweathermap.org/img/w/"+icon+".png"
        console.log(data);
        $('#city').html(city);
        $('#desc').html(desc);
        $('#temp').html(Math.round(temp)+"°");
        $('.icon').attr("src",imgUrl);
      });
    });
}


});
