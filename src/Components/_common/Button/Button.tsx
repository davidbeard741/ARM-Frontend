import BtnStyles from "./BtnStyles";

interface prop {
  Name: String;
  bghover?: any;
  bgactive?: any;
  Coloractive?: any;
  Colorhover?: any;
  customStyle?: any;
  borderHover?: any;
  borderActive?: any;
  height?: any;
  lapheight?: any;
  type?: any;
}
export const Button = (Props: prop) => {
  const {
    Name,
    bghover,
    bgactive,
    Coloractive,
    Colorhover,
    customStyle,
    borderHover,
    borderActive,
    height,
    lapheight,
    type,
  } = Props;
  const { btnFile, container, handleMouseEnter, handleMouseLeave } = BtnStyles(
    bghover,
    bgactive,
    Coloractive,
    Colorhover,
    borderActive,
    borderHover,
    height,
    lapheight
  );

  return (
    <div style={container}>
      <button
        style={{ ...btnFile, ...customStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type={type}
      >
        {Name}
      </button>
    </div>
  );
};
