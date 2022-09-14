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
  } = Props;
  const { btnFile, container, handleMouseEnter, handleMouseLeave } = BtnStyles(
    bghover,
    bgactive,
    Coloractive,
    Colorhover,
    borderActive,
    borderHover
  );

  return (
    <div style={container}>
      <button
        style={{ ...btnFile, ...customStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Name}
      </button>
    </div>
  );
};
