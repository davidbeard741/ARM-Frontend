import React from "react";
import Slider, { SliderProps } from "react-rangeslider";
import "react-rangeslider/lib/index.css";

interface Props extends SliderProps {
  sliderText: string;
}

const ProgressBar = (props: Props) => {
  return (
    <div className='slider'>
      <Slider {...props} />
      <div
        style={{ color: "black" }}
      >{`${props.sliderText} ${props.value}%`}</div>
    </div>
  );
};

export default ProgressBar;
