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
          colorPrimary: "#d386c1",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
