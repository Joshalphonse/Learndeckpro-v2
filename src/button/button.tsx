import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className }) => {
  const buttonMouseOverHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const btn: HTMLButtonElement = event.currentTarget;
    btn.style.border = "3px solid red";
    btn.style.backgroundColor = "orange";
  };

  // This function will be triggered when the mouse pointer is moving out of the button
  const buttonMouseOutHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const btn: HTMLButtonElement = event.currentTarget;
    btn.style.border = "none";
    btn.style.backgroundColor = "yellow";
  };
  return (
    <div className={`${styles.root} ${className}`}>
      <div>
        <button
          onMouseOver={buttonMouseOverHandler}
          onMouseOut={buttonMouseOutHandler}
          className="button"
        >
          Button
        </button>
      </div>
    </div>
  );
};
export default Button;
