import CityInput from "./City/CityInput";
import City from "./City/City";
import CurrentWeather from "./WeatherMainInfo/CurrentWeather";
import WeatherIcon from "./WeatherMainInfo/WeatherIcon";
import WeatherDetailsCard from "./WeatherDetailsCard/WeatherDetailsCard";
import Forecast from "./Forecast/Forecast";
import { useState, useEffect } from "react";
import axios from "axios";

const Mainweather = () => {
  const [forecastInfo, setForecastInfo] = useState(null);
  const [cityToCheck, setCitytoCheck] = useState("London");
  const [url, setUrl] = useState(
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6b680426a642da7d42bc531c4038cbca&units=metric"
  );
  const [lat, setLat] = useState(51.5085);
  const [lon, setLon] = useState(-0.1257);
  const [forecastUrl, setForecastUrl] = useState(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6b680426a642da7d42bc531c4038cbca&units=metric`
  );

  const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "&appid=6b680426a642da7d42bc531c4038cbca";
  const units = "&units=metric";
  const [mainWeatherInfo, setMainWeatherInfo] = useState({
    temperature: "...",
    feelsLike: "...",
    humi: "...",
    visi: "...",
    wind: "...",
    pressure: "...",
  });
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState("...");
  const [iconWeatherId, setIconWeatherId] = useState("img");

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      try {
        const response = await axios.get(url);

        console.log(response.data);

        setCurrentWeatherInfo(response.data.weather[0].description);
        setIconWeatherId(response.data.weather[0].icon);
        setLat(response.data.coord.lat);
        setLon(response.data.coord.lon);
        setMainWeatherInfo((prevState) => ({
          ...prevState,
          temperature: response.data.main.temp,
          feelsLike: response.data.main.feels_like,
          humi: response.data.main.humidity,
          visi: response.data.visibility,
          wind: response.data.wind.speed,
          pressure: response.data.main.pressure,
        }));

        setCitytoCheck(response.data.name);
      } catch (error) {
        setCitytoCheck("No City ");
        console.error(error);
      }
    };

    fetchWeatherInfo();
  }, [url]);

  useEffect(() => {
    const forecastHandler = () => {
      setForecastUrl(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6b680426a642da7d42bc531c4038cbca&units=metric`
      );
    };

    forecastHandler();
  }, [lat, lon]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(forecastUrl);
        const responseData = response.data;
        console.log(responseData);

        const firstTenItems = responseData.list.slice(0, 10);
        const forecastData = firstTenItems.map((results) => {
          const date = new Date(results.dt_txt);
          return {
            date: date,
            day: date.getDate(),
            month: date.getMonth() + 1,
            hour: date.getHours(),
            forecastTemp: results.main.temp,
          };
        });

        setForecastInfo(forecastData);
        console.log(forecastData);
      } catch (error) {
        console.log("No city");
      }
    };

    fetchForecast();
  }, [forecastUrl]);

  const EnteredCityHandler = (enteredCity) => {
    setUrl(apiLink + enteredCity + apiKey + units);
  };

  return (
    <div className="p-5 max-w-3xl mx-auto mt-20 bg-slate-300	 flex flex-col items-center bg-purple-800	rounded-xl shadow-lg space-x-4 justify-center ">
      <p className="text-gray-900 text-4xl mb-10 font-bold ">Weather App</p>
      <CityInput onEnteredCity={EnteredCityHandler} />
      <City cityToCheck={cityToCheck} />
      <CurrentWeather currentWeatherInfo={currentWeatherInfo} />
      <WeatherIcon iconWeatherId={iconWeatherId} />
      <WeatherDetailsCard mainWeatherInfo={mainWeatherInfo} />
      {forecastInfo && <Forecast forecastInfo={forecastInfo} />}
    </div>
  );
};

export default Mainweather;
