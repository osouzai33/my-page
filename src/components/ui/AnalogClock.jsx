import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsDegrees = (seconds / 60) * 360;
  const minutesDegrees = (minutes / 60) * 360;
  const hoursDegrees = (hours / 12) * 30 + (minutes / 60) * 30;

  return (
    <div className="w-20 h-20 border-8 border-black rounded-full relative">
      <div
        className="hand bg-black absolute bottom-1/2 left-1/2 transform -translate-x-1/2 h-12 w-1"
        style={{
          height: "20px",
          width: "4px",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -100%) rotate(${hoursDegrees}deg)`,
          transformOrigin: "bottom center",
        }}
      />
      <div
        className="hand bg-black absolute bottom-1/2 left-1/2 transform -translate-x-1/2 h-12 w-1"
        style={{
          height: "30px",
          width: "4px",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -100%) rotate(${minutesDegrees}deg)`,
          transformOrigin: "bottom center",
        }}
      />
      <div
        className="hand bg-black absolute bottom-1/2 left-1/2 transform -translate-x-1/2 h-12 w-1"
        style={{
          height: "30px",
          width: "2px",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -100%) rotate(${secondsDegrees}deg)`,
          transformOrigin: "bottom center",
        }}
      />
    </div>
  );
};

export default AnalogClock;
