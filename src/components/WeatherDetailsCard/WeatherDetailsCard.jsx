import React from "react";

import Wind from "./Wind";
import Visibility from "./Visibility";
import Temp from "./Temp";
import Humidity from "./Humidity";
import FeelsLike from "./FeelsLike";
import Pressure from "./Pressure";

const WeatherDetailsCard = (props) => {
  const temp = props.mainWeatherInfo.temperature;
  const feelsLike = props.mainWeatherInfo.feelsLike;
  const wind = props.mainWeatherInfo.wind;
  const visibility = props.mainWeatherInfo.visi;
  const humidity = props.mainWeatherInfo.humi;
  const pressure = props.mainWeatherInfo.pressure;

  return (
    <div className="flex flex-row justify-between mt-6 mb-7 space-x-1.5 md:space-x-7">
      <Temp temp={temp} />
      <FeelsLike feelsLike={feelsLike} />
      <Wind wind={wind} />
      <Humidity humidity={humidity} />
      <Visibility visibility={visibility} />
      <Pressure pressure={pressure} />
    </div>
  );
};

export default WeatherDetailsCard;
