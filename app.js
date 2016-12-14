function loadDate() {
  var date = document.getElementById("date");
  date.innerHTML = (new Date()).toString().split(' ').splice(0,4).join(' ');
}

function loadWeather() {
  var weather = document.getElementById("weather");
  var url = 'https://api.forecast.io/forecast/';
  var apiKey = '9f393b3649ff07769b75d4b7bc75fcd3';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      weather.innerHTML=('Based on your current location, it is ' + data.currently.temperature + '° F right now');
    });
  }

  function error() {
    alert("Unable to retrieve your location for weather");
  }

  weather.innerHTML = "fetching weather...";
}

function loadNews() {
  var news = document.getElementById("news");
  var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
  var apiKey = "83781e51c30e4a3bb7cc2b0ffde70d8c";

  $.getJSON(url + apiKey, function(data) {
    var titles = data.articles.map(function(articles) {
      return "<a href=" + articles.url + ">" + articles.title + "</a>";
    });

    news.innerHTML = (titles.join("<br><br>"));
  });

  news.innerHTML = "fetching news..."
}

loadDate();
loadWeather();
loadNews();
