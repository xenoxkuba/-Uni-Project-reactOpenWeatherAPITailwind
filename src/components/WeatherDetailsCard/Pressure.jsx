import React from "react";

const Pressure = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs md:text-sm">Pressure</div>
        <div className="text-xs md:text-sm text-gray-800">
          {props.pressure}m
        </div>
      </div>
    </div>
  );
};

export default Pressure;
