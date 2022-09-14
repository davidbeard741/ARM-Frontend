import { useState } from "react";

const BtnStyles = (
  bghover: any,
  bgactive: any,
  Coloractive: any,
  Colorhover: any,
  borderHover?: any,
  borderActive?: any
) => {
  const [isHovering, setIsHovering] = useState(false);
  const [FindWidth, setFindWidth] = useState(window.innerWidth);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  window.onresize = function () {
    let findWidth = window.innerWidth;
    setFindWidth(findWidth);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const size = {
    mobile: 600,
    laptop: 1024,
  };

  let btnFile = {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize:
      FindWidth <= size?.mobile
        ? "16px"
        : FindWidth >= size.laptop
        ? "20px"
        : "26px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    height:
      FindWidth <= size?.mobile
        ? "40px"
        : FindWidth >= size.laptop
        ? "50px"
        : "60px",
    width: "100%",
    transition: isHovering ? "0.5s" : "0.8s",
    backgroundColor: isHovering ? bghover : bgactive,
    justifyContent: "center",
    outline: "none",
    border: isHovering
      ? ` ${borderHover ? borderHover : "2px solid #FFB718"}`
      : ` ${borderActive ? borderActive : "2px solid #000000"}`,
    color: isHovering ? Colorhover : Coloractive,
    cursor: "pointer",
  } as const;

  const container = {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: " 100%",
  } as const;

  return {
    btnFile,
    container,
    handleMouseLeave,
    handleMouseEnter,
  };
};

export default BtnStyles;
