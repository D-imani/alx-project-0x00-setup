import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`${styles} px-4 py-2 font-medium`}>
      {title}
    </button>
  );
};

export default Button;