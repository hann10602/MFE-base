import { ConfigProvider } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a25c92",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
