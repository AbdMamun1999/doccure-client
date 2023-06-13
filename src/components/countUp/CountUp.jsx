import React from "react";
import CountUp from "react-countup";

const CountUpUi = ({ endPoint, time, number }) => {
  return (
    <CountUp
      start={1}
      end={endPoint}
      duration={time}
      suffix={`${number ? number : ""}+`}
    >
      {({ countUpRef, start }) => (
        <div>
          <span className="text-4xl font-bold" ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
};

export default CountUpUi;
