
function getDate() {
	var date = document.getElementById("date"); 
	date.innerHTML = (new Date()).toString().split(' ').splice(0,4).join(' ');
}

getDate();

function weather() {

    var apiKey = '9f393b3649ff07769b75d4b7bc75fcd3'; 
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

		var request = new XMLHttpRequest();
		request.open('GET',url + apiKey + "/" + latitude + "," + longitude + "?callback=?", true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    var data = JSON.parse(request.responseText);
		    document.getElementById("weather").innerHTML = data.currently.temperature + '° F';
		  } else {
		    alert("error with weather request")
		  }
		};

		request.onerror = function() {
			alert("connection error")
			};

		request.send();      		 
    }

    function error() {
      alert("Unable to retrieve your location");
    }
  };

weather();







//  $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      //   $('#temp').html(data.currently.temperature + '° F');
      //   $('#minutely').html(data.minutely.summary);
      // });