import BtnStyles from "./BtnStyles";

interface Prop
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Name: string;
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
export const Button = (Props: Prop) => {
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
        {...Props}
        type={type}
      >
        {Name}
      </button>
    </div>
  );
};
