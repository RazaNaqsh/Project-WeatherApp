import displayWeather from "./view";

const errorMsg = document.getElementById("Error");

async function getWeather(place = "Medina") {
	try {
		const resp = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=c71a2bee0691fb692d156e4c950c6d61`
		);

		const respData = await resp.json();

		// * This sends whole data to display module

		displayWeather.showData(respData);
		// space
	} catch (err) {
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
