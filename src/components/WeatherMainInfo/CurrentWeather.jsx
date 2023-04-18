const CurrentWeather = (props) => {
  return (
    <div className="text-xl text-center tbg-stone-400	font-bold capitalize">
      {props.currentWeatherInfo}
    </div>
  );
};

export default CurrentWeather;
