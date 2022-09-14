import BtnStyles from "./BtnStyles";

interface prop
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
        {...Props}
      >
        {Name}
      </button>
    </div>
  );
};
