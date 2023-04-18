import React from "react";

const Temp = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="font-medium text-xs md:text-sm">Temperature</div>
        <div className="text-xs md:text-sm text-gray-800">{props.temp}C</div>
      </div>
    </div>
  );
};

export default Temp;
