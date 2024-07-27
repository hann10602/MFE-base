import React from "react";
import { useSearchParams } from "react-router-dom";
import { Profile, SideBar, Cart, ChangePassword } from "./components";
import "./index.scss";

type Props = {};

export const ProfilePage = (props: Props) => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="profile__wrapper">
      <SideBar />
      <div className="profile__body">
        {tab === "profile" && <Profile />}
        {tab === "cart" && <Cart />}
        {tab === "change-password" && <ChangePassword />}
      </div>
    </div>
  );
};
