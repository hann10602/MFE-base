import { Image } from "antd";
import Text from "antd/es/typography/Text";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SIDE_BAR_MENU } from "../../constants";
import "./index.scss";

type Props = {};

export const SideBar = (props: Props) => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="profile__side-bar">
      <div className="profile__side-bar__header">
        <Image
          src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
          className="profile__side-bar__avatar"
          preview={false}
          alt="avatar"
        />
        <Text className="profile__side-bar__full-name">Henry</Text>
      </div>
      <div className="profile__side-bar__menu">
        {SIDE_BAR_MENU.map((item) => (
          <Link key={item.label} to={item.path}>
            <div
              className={`${
                tab === item.code ? "selected-tab" : ""
              } profile__side-bar__menu-item`}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
