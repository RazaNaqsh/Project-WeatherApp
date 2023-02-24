async function getWeather(place = "London") {
	const resp = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=c71a2bee0691fb692d156e4c950c6d61`
	);
	// console.log(resp);

	const respData = await resp.json();
	// console.log(respData);

	const weatherMainData = respData.main;
	console.log(weatherMainData);

	const weatherSubData = respData.weather[0];
	console.log(weatherSubData);
}

// async function getLocation() {}

export default (function weather() {
	return {
		getWeather,
	};
})();
