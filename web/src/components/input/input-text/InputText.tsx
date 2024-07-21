import { Input, InputProps } from "antd";
import React from "react";
import "./index.scss";

interface Props extends InputProps {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const InputText = (props: Props) => {
  const { rightIcon, leftIcon, ...inputProps } = props;
  return (
    <div className="component__input-text">
      {leftIcon && (
        <div className="component__input-text__left-icon">{leftIcon}</div>
      )}
      <Input {...inputProps} />
      {rightIcon && (
        <div className="component__input-text__right-icon">{rightIcon}</div>
      )}
    </div>
  );
};