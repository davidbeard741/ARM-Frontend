import React, { Component, useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const ProgressBar = () => {
  const [value, setValue] = useState(10);
  const handleChangeStart = () => {
    console.log("Change event started");
  };
  const handleChangeComplete = () => {
    console.log("Change event completed");
  };
  return (
    <div className="slider">
      <Slider
        min={0}
        max={50}
        value={value}
        onChangeStart={handleChangeStart}
        onChange={setValue}
        onChangeComplete={handleChangeComplete}
      />
      <div style={{ color: "black" }}>{value}</div>
    </div>
  );
};

export default ProgressBar;
