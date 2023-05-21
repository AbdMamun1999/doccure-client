import React from "react";

const ClinicSpecialitiesCard = ({ img }) => {
  return (
    <div className="res-item border-2 h-[86px] w-[86px] flex justify-center items-center rounded-full">
      <span>
        <img src={img} />
      </span>
    </div>
  );
};

export default ClinicSpecialitiesCard;
