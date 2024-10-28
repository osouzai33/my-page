import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="text-3xl">{time.toLocaleDateString()}</div>
      <div className="text-2xl">{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default DigitalClock;
