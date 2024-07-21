import { Icon } from "@iconify-icon/react";
import React, { ReactNode } from "react";
import "./index.scss";

type Props = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="layout__container">
      <div className="layout__header">
        <Icon icon="material-symbols:arrow-back-ios-rounded" />
        <div></div>
      </div>
      {children}
      <div></div>
    </div>
  );
};
