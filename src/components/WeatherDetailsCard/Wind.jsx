import React from "react";

const Wind = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs md:text-sm">Wind </div>
        <div className="text-xs md:text-sm text-gray-800">{props.wind} m/s</div>
      </div>
    </div>
  );
};

export default Wind;
