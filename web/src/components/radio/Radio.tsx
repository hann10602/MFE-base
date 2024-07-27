import { Radio as AntdRadio, RadioProps } from "antd";
import React from "react";

interface Props extends RadioProps {}

export const Radio = (props: Props) => {
  const { ...radioProps } = props;
  return <AntdRadio {...radioProps} />;
};
