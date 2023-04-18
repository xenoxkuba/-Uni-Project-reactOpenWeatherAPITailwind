import React from "react";

const FeelsLike = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs md:text-sm">Feels Like</div>
        <div className="text-xs md:text-sm text-gray-800">
          {props.feelsLike}C
        </div>
      </div>
    </div>
  );
};

export default FeelsLike;
