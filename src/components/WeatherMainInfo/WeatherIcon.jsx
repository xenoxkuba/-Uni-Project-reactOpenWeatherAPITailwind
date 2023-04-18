const WeatherIcon = (props) => {
  const iconId = props.iconWeatherId;
  const fullIconApiLink = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <div className="text-4xl font-bold text-center text-white mt-10 mb-14">
      <img src={fullIconApiLink} alt="Ikona pogody"></img>
    </div>
  );
};

export default WeatherIcon;
