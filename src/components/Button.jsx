import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  return (
    <div className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </div>
  );
};

export default Button;
