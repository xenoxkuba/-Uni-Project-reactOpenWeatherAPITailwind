import React from "react";




const Humidity = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs md:text-sm">Humidity</div>
        <div className="text-xs md:text-sm text-gray-800">{props.humidity}%</div>
      </div>
    </div>
  );
};

export default Humidity;
