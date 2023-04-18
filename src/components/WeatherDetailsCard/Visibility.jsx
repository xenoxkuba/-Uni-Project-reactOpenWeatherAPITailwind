import React from "react";

const Visibility = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs md:text-sm">Visibility</div>
        <div className="text-xs md:text-sm text-gray-800">{props.visibility}m</div>
      </div>
    </div>
  );
};

export default Visibility;
