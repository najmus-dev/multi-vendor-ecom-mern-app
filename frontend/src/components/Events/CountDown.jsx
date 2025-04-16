
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [deleted, setDeleted] = useState(false); 

  useEffect(() => {
    if (!data || !data.Finish_Date) return;

    const timer = setInterval(() => {
      const difference = +new Date(data.Finish_Date) - +new Date();
      if (difference <= 0) {
        setTimeLeft({});
        clearInterval(timer);

        // Only delete once
        if (!deleted) {
          axios.delete(`${server}/event/delete-shop-event/${data._id}`);
          setDeleted(true);
        }
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [data, deleted]);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) return null;
    return (
      <span key={interval} className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px]">Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
