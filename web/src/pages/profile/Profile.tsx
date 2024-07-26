import React from "react";
import { SideBar } from "./components/SideBar";
import "./index.scss";

type Props = {};

export const ProfilePage = (props: Props) => {
  return (
    <div className="profile__wrapper">
      <SideBar />
      <div className="profile__body">main </div>
    </div>
  );
};
