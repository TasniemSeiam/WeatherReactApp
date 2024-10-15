import axios from "axios";
import CityWeatherModel from "../models/CityWeatherModel";


let APIkey = "8247c16e37d59aeacbab8f04bafab235";

  export const fetchWeatherData = async (city)  => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      );
      console.log(response.data);
      const weatherData = response.data;
      return new CityWeatherModel(
        weatherData.name,
        weatherData.main.temp,
        weatherData.wind.speed,
        weatherData.weather[0].main,
        weatherData.weather[0].id,
        weatherData.main.humidity,
      );
    } catch (error) {
      console.error("An error occurred while fetching data: ", error);
    }

  };


