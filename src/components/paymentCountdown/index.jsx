import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function PaymnetCountDown() {
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="flex justify-between items-center my-4">
      <Typography variant="h3" className="text-gray-400 font-medium text-xl">
        Complete your <br /> payment within:
      </Typography>

      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1 className="text-gray-50 font-bold text-xl">
            <span className="mr-1.5 bg-gray-500 p-2 rounded">00</span>:
            <span className="ml-1.5 bg-gray-500 p-2 rounded">00</span>
          </h1>
        ) : (
          <h1 className="text-gray-50 font-bold text-xl">
            <span className="mr-1.5 countdown_bg p-2 rounded">
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            :
            <span className="ml-1.5 countdown_bg p-2 rounded">
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </h1>
        )}
      </div>
    </div>
  );
}

export default PaymnetCountDown;
