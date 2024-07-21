import { Layout } from "antd";
import React, { ReactNode } from "react";
import { HeaderLayout } from "./header";
import FooterLayout from "./footer";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <HeaderLayout />
      <div className="test">asdasd</div>
      {children}
      <FooterLayout />
    </Layout>
  );
};