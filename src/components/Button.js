import React from "react";

const Button = ({
  className,
  children = "submit",
  bold = false,
  color = "",
}) => {
  let newColor = "text-teColorPrimary bg-white";
  switch (color) {
    case "primary":
      newColor = "text-white bg-teColorPrimary";
      break;

    default:
      break;
  }
  return (
    <button
      className={`shadow-[inset_0_0_30px_-10px_rgba(255,255,255,1)] min-w-[242px] px-8 py-3 rounded-full hover:shadow-none ease-in ${
        bold ? "font-bold" : ""
      } ${newColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
