import { Button as AntdButton, ButtonProps } from "antd";
import React from "react";
import "./index.scss";

interface Props extends ButtonProps {}

export const Button = (props: Props) => {
  const { className, ...buttonProps } = props;
  return (
    <AntdButton className={`${className} component__button`} {...buttonProps} />
  );
};
