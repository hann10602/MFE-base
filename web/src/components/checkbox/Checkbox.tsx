import { Checkbox as AntdCheckbox, CheckboxProps } from "antd";
import React from "react";

interface Props extends CheckboxProps {}

export const Checkbox = (props: Props) => {
  const { ...checkboxProps } = props;
  return (
    <div className="checkbox-wrapper">
      <AntdCheckbox {...checkboxProps} />
    </div>
  );
};
