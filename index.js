const express = require("express");
const axios = require("axios");

const app = express();

const key = "052dcf3fddec4e7ae81a0e6a53685c16";

// get main page
app.get("/", (req, res) => {
	res.send("Hello world !");
});

// get weather by city_name
app.get("/weather", async (req, res) => {
	const city_name = req.query.city_name;
	const reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}`;

	const request = await fetch(reqUrl);
	const response = await request.json();

	res.send(response);
});

// start
const dev = async () => {
	try {
		const PORT = 4100;
		app.listen(PORT, () => {
			console.log(`App started in http://localhost:${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

dev();
