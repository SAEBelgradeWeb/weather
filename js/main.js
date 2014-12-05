//var city = "Belgrade,Rs";

function getWeather(){

	var city = document.getElementById('city_select').value;
//	if (!city) city = "Belgrade,Rs";

	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric";
	//http://api.openweathermap.org/data/2.5/weather?q=Belgrade,Rs&units=metric
	console.log(url);
	var json = new XMLHttpRequest();

	json.onreadystatechange = function(){
		var response = json.responseText;
		response = JSON.parse(response);

		var temp = Math.round(response.main.temp);
		var desc = response.weather[0].description;

		document.getElementById('temp').innerHTML = temp + "C";
		document.getElementById('desc').innerHTML = desc;

		console.log(desc);
	}

	json.open("GET", url, true);
	json.send();

}

getWeather();