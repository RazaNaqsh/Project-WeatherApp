import displayWeather from "./view";

const errorMsg = document.getElementById("Error");

async function getWeather(place = "London") {
	try {
		const resp = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=c71a2bee0691fb692d156e4c950c6d61`
		);
		// console.log(resp);

		const respData = await resp.json();

		const locationName = respData.name;
		// console.log(respData.wind);

		const weatherMainData = respData.main;
		// console.log(weatherMainData);

		const weatherSubData = respData.weather[0];
		// console.log(weatherSubData);

		displayWeather.showData(
			respData,
			locationName,
			weatherMainData,
			weatherSubData
		);
	} catch (err) {
		console.log(err);
		console.log("This is from catch: error");
		errorMsg.textContent = "Enter Valid City, State or Country!";
	}
}

async function getLocation(e) {
	errorMsg.textContent = "";

	const location = document.getElementById("location");
	// console.log(location);
	if (location.value !== "") {
		e.preventDefault();
		// console.log(location.value);
		getWeather(location.value);
		location.value = "";
	}
}

export default (function weather() {
	function initialize() {
		const submitBtn = document.getElementById("submit");
		submitBtn.addEventListener("click", getLocation);
		getWeather("Medina");
	}
	return {
		initialize,
		getWeather,
	};
})();
