import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div className="shadow-lg ">
      <div
        id="div-style"
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <div className="flex justify-center ">
          <div className="m-5 font-bold">
            <p className="mb-2">{weight}%</p>
            <p>{hexValue}</p>
            {alert && <p className="text-green-900 ">Copied </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleColor;
