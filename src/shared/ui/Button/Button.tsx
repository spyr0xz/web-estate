import React, { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";
import { classNames } from "../../lib/classNames/classNames";

export enum ButtonTheme {
  PRIMARY = "primary",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button = (props: ButtonProps) => {
  const { type, className, theme = ButtonTheme.PRIMARY, children, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
