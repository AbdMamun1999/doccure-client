import React from "react";

const ClinicSpecialitiesCard = ({ department }) => {
  const { img, specialist } = department || {};
  return (
    <div>
      <div className="border border-green-50 shadow-md rounded-full overflow-hidden">
        <span>
          <img className="w-full h-full object-cover p-5 " src={img} />
        </span>
      </div>{" "}
      <p className="text-center mt-2">{specialist}</p>
    </div>
  );
};

export default ClinicSpecialitiesCard;

// res-item border-2 h-[86px] w-[86px] flex justify-center items-center rounded-full
