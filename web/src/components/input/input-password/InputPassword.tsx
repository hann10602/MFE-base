import { Input, InputProps } from "antd";
import React from "react";
import "./index.scss";

interface Props extends InputProps {}

export const InputPassword = (props: Props) => {
  return (
    <div className="component__input-password">
      <Input.Password {...props} />
    </div>
  );
};
